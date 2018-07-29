// Authentication sub-app
//
// This sub-app assumes that koa-passport is already
// initialized.

// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';

// Passport
import KoaPassport from 'koa-passport';

// Utils
import Mailer from '@/utils/Mailer';
import Models from '@/mongodb/Models';

// Other
import promisify from 'es6-promisify';
import uuidv1 from 'uuid/v1';

const app = new Koa();
const router = new KoaRouter();

router.post('/verify', async (ctx) => {
  const req = ctx.request.body;
  console.log(req);
  let tempAcct = null;
  try {
    tempAcct = await Models.TempAccount.findOne({
      vcode: req.code,
    });
  } catch (e) {
    console.error(e);
    ctx.status = 500;
    ctx.body = 'Internal server error';
    return;
  }
  if (!tempAcct) {
    ctx.status = 404;
    const response = {
      success: false,
      message: 'No unverified accounts with that email',
    };
    ctx.body = JSON.stringify(response);
    return;
  }
  const userEmail = tempAcct.email;
  let userAcct = null;
  try {
    userAcct = await Models.Account.findOne({
      email: userEmail,
      email_verified: false,
    });
  } catch (e) {
    console.error(e);
    ctx.status = 500;
    ctx.body = 'Internal server error';
    return;
  }
  if (!userAcct) {
    console.log('TempAcct exists but user account doesnt?');
    ctx.status = 404;
    const response = {
      success: false,
      message: 'No unverified accounts with that email',
    };
    ctx.body = JSON.stringify(response);
    return;
  }
  try {
    userAcct.email_verified = true;
    await userAcct.save();
    tempAcct = await Models.TempAccount.remove({
      email: userEmail,
    });
  } catch (e) {
    console.error(e);
    ctx.status = 500;
    ctx.body = 'Internal server error';
    return;
  }
  const response = {
    success: true,
    message: 'Verified!',
  };
  ctx.body = JSON.stringify(response);
});

router.post('/resendVerificationEmail', async (ctx) => {
  const req = ctx.request.body;
  let tempAcct = null;
  let acct = null;
  try {
    tempAcct = await Models.TempAccount.findOne({
      email: req.email,
    });
    acct = await Models.Account.findOne({
      email: req.email,
    });
  } catch (e) {
    ctx.status = 500;
    ctx.body = 'Internal server error';
    return;
  }
  if (!tempAcct) {
    ctx.status = 404;
    const response = {
      success: false,
      noUnverified: true,
      message: 'No unverified accounts with that email',
    };
    ctx.body = JSON.stringify(response);
    return;
  }
  const validationCode = tempAcct.vcode;
  // Remove me when email is complete
  // console.log(`Go to localhost:8080/validate/${validationCode}`);
  const mailer = new Mailer();
  try {
    await mailer.sendTemplate(
      req.email,
      'email-verification',
      {
        fname: acct.firstname,
        email: req.email,
        code: validationCode,
      },
    );
  } catch (err) {
    const response = {
      success: false,
      message: 'Email could not be sent',
    };
    ctx.status = 500;
    ctx.body = JSON.stringify(response);
    return;
  }
  const response = {
    success: true,
    message: 'Check your mailbox!',
  };
  ctx.body = JSON.stringify(response);
});

// Authentication API endpoints
router.post('/login', ctx => KoaPassport.authenticate('local', (_, user) => {
  if (user === false) {
    // Failure
    const response = {
      success: false,
      message: 'Authentication failure',
    };
    ctx.body = JSON.stringify(response);

    ctx.status = 401;
    return false;
  }
  // Success
  const response = {
    success: true,
    message: 'Successfully logged in',
  };
  ctx.body = JSON.stringify(response);
  return ctx.login(user);
})(ctx));

router.get('/logout', (ctx) => {
  ctx.logout();
  ctx.body = '{"success":true}';
});

router.get('/status', (ctx) => {
  if (ctx.isAuthenticated()) {
    const response = {
      success: true,
      status: true,
      user: ctx.state.user,
    };
    ctx.body = JSON.stringify(response);
  } else {
    const response = {
      success: true,
      status: false,
    };
    ctx.body = JSON.stringify(response);
  }
});

async function checkIsNotVerified(email) {
  let acct = null;
  try {
    acct = await Models.Account.findOne({
      email: email,
    });
  } catch (e) {
    console.log(e);
    return false;
  }
  if (acct.email_verified) {
    return false;
  }
  return true;
}

async function generateResponse(err, email = null, defaultResponse = null) {
  if (err.name === 'UserExistsError' || err.name === 'BulkWriteError') {
    let response;
    const isntVerified = await checkIsNotVerified(email);
    if (isntVerified) {
      response = { success: false, message: 'Email exists but not verified' };
    } else {
      response = { success: false, message: 'User already exists' };
    }
    return response;
  }
  return defaultResponse;
}

router.post('/register', async (ctx) => {
  // FIXME: Input sanitization
  if (ctx.isAuthenticated()) {
    const response = {
      success: false,
      message: 'Cannot register new account while logged in',
    };
    ctx.body = JSON.stringify(response);
    return;
  }
  const req = ctx.request.body;
  const promiseRegister = promisify(Models.Account.register, Models.Account);
  const email = req.email.toLowerCase();

  let defaultOrg = null;
  let org = null;
  if (req.business_name) {
    try {
      org = new Models.Organization({
        business_name: req.business_name,
        email: email,
      });
      await org.save();
      defaultOrg = org._id;
    } catch (err) {
      console.log('Error when creating new org', err);
      if (err.name === 'BulkWriteError') {
        let response;
        const isntVerified = await checkIsNotVerified(email);
        if (isntVerified) {
          response = {
            success: false,
            message: 'Email exists but not verified',
          };
        } else {
          response = {
            success: false,
            message: 'User already exists',
          };
        }
        ctx.body = JSON.stringify(response);
        return;
      }
      const response = {
        success: false,
        message: 'Account creation failed',
      };
      ctx.body = JSON.stringify(response);
      return;
    }
  }
  let user = null;
  try {
    user = await promiseRegister(
      {
        email: email,
        firstname: req.fname,
        lastname: req.lname,
        default_org: defaultOrg,
        org_list: [defaultOrg],
      },
      req.pwd,
    );
  } catch (err) {
    console.log('Error when creating account', err);
    if (err.name === 'UserExistsError') {
      let response;
      const isntVerified = await checkIsNotVerified(email);
      if (isntVerified) {
        response = {
          success: false,
          message: 'Email exists but not verified',
        };
      } else {
        response = {
          success: false,
          message: 'User already exists',
        };
      }
      ctx.body = JSON.stringify(response);
      return;
    }
    const response = {
      success: false,
      message: 'Account creation failed',
    };
    ctx.body = JSON.stringify(response);
    return;
  }
  if (org) {
    org.user_id = user._id;
    await org.save();
  }
  const validationCode = uuidv1();

  const x = new Models.TempAccount({
    email: email,
    vcode: validationCode,
  });
  x.save();
  if (req.hdyh) {
    const y = new Models.HDYH({
      email: email,
      how_did_you_hear: req.hdyh,
    });
    y.save();
  }
  // Remove me when email is complete
  console.log(`Go to localhost:8080/validate/${validationCode}`);
  const mailer = new Mailer();
  try {
    await mailer.sendTemplate(
      email,
      'email-verification',
      {
        fname: req.fname,
        email: email,
        code: validationCode,
      },
    );
  } catch (err) {
    const response = {
      success: false,
      message: 'Email could not be sent',
    };
    ctx.status = 500;
    ctx.body = JSON.stringify(response);
    return;
  }
  const response = {
    success: true,
    message: 'Check your mailbox!',
  };
  ctx.body = JSON.stringify(response);
});

router.post('/register2', async (ctx) => {
  console.log(ctx.request.body);
  const req = ctx.request.body;
  const email = req.email.toLowerCase();
  // here is what data will look like:
  /* const data = {
    email: this.email,
    fname: this.fname,
    lname: this.lname,
    pwd: this.password,
    business_name: this.business_name, // if user creates org
    address: this.job.address,
    jobInfo: { // if user creates job
      address2: this.job.address2,
      title: this.title,
      university: this.university,
      lat: this.job.latitude,
      long: this.job.longitude,
    },
  }; */
  var user;
  try {
    // TRY CREATE USER
    const promiseRegister = promisify(Models.Account.register, Models.Account);
    user = await promiseRegister(
      {
        email: email,
        firstname: req.fname,
        lastname: req.lname,
      },
      req.pwd,
    );
  } catch (err) {
    console.log('Error when creating account', err);
    let response = { success: false, message: 'Account creation failed' };
    response = await generateResponse(err, email, response);
    ctx.body = JSON.stringify(response);
    return;
  }

  console.log('USER', user);
  var org;
  if (req.business_name) {
    try {
      // TRY CREATE ORG
      org = new Models.Organization({
        business_name: req.business_name,
        email: req.email.toLowerCase(),
        user_id: user._id,
      });
      await org.save();
      // Now add org to user's account
      user.default_org = org._id;
      user.org_list = [org._id];
      await user.save();
    } catch (err) {
      console.log('Error when creating new org', err);
      await Models.Account.remove({
        _id: user._id,
      });
      let response = { success: false, message: 'Organization creation failed' };
      response = await generateResponse(err, email, response);
      ctx.body = JSON.stringify(response);
      return;
    }
  }

  var job;
  if (req.jobInfo) {
    const postedBy = req.business_name ? req.business_name : `${req.fname} ${req.lname}`;
    try {
      // TRY CREATE JOB
      job = new Models.Job({
        email: email,
        posted_by: postedBy,
        user_id: user._id,
        business_id: req.business_name ? org._id : null,
        title: req.jobInfo.title,
        address: req.address,
        address2: req.jobInfo.address2,
        latitude: req.jobInfo.lat,
        longitude: req.jobInfo.long,
        active: false,
      });
      await job.save();
    } catch (err) {
      console.log('Error when creating new job', err);
      const response = { success: false, message: 'Job creation failed' };
      ctx.body = JSON.stringify(response);
      return;
    }
  }
  const response = {
    success: true,
    message: {
      userId: user._id,
      orgId: org ? org._id : null,
      jobId: job ? job._id : null,
    },
  };
  ctx.body = JSON.stringify(response);
});

router.get('/status', (ctx) => {
  if (ctx.isAuthenticated()) {
    const response = {
      success: true,
      status: true,
      user: ctx.state.user,
    };
    ctx.body = JSON.stringify(response);
  } else {
    const response = {
      success: true,
      status: false,
    };
    ctx.body = JSON.stringify(response);
  }
});

router.post('/checkIfExists', async (ctx) => {
  const req = ctx.request.body;
  const acct = await Models.Account.findOne({
    email: req.email,
  });
  if (acct) {
    const response = {
      success: true,
      exists: true,
    };
    ctx.body = JSON.stringify(response);
  } else {
    const response = {
      success: true,
      exists: false,
    };
    ctx.body = JSON.stringify(response);
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
