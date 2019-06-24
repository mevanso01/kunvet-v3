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
import Logger from 'winston';
import promisify from 'es6-promisify';
import uuidv1 from 'uuid/v1';

const app = new Koa();
const router = new KoaRouter();


function generateCodeString(numDigits = 4) {
  var code = '';
  for (var i = 0; i < numDigits; i++) {
    code += Math.floor((Math.random() * 10)).toString();
  }
  return code;
}

async function sendVerificationCode(email, firstname) {
  const code = generateCodeString();
  const VerificationCode = new Models.VerificationCode({
    email: email,
    code: code,
    // createdAt: set in model as Date.now()
    // expiresAt: set in model, should be 45 minutes after Date.now()
  });
  await VerificationCode.save();
  try {
    const mailer = new Mailer();
    await mailer.sendTemplate(
      email,
      'email-code-verification',
      {
        fname: firstname,
        email: email,
        code: code,
      },
    );
  } catch (err) {
    console.log('Error sending email in sendVerificationCode()', err);
    return {
      success: false,
      message: 'Email could not be sent',
      status: 500,
    };
  }
  return {
    success: true,
    message: 'success',
    status: 200,
  };
}

function deleteVerificationCodeInstance(email, code) {
  try {
    Models.VerificationCode.deleteOne({
      email: email,
      code: code,
    });
  } catch (err) {
    console.log('Error deleting verification code:', err);
  }
}

async function hasVerificationCode(user) {
  if (user.email_verified) {
    return {
      success: true,
      hasVerificationCode: false,
      alreadyVerified: true,
    };
  }
  const verificationCodes = await Models.VerificationCode.find({
    email: user.email,
  });
  if (verificationCodes) {
    const currentDate = Date.now();
    for (var item of verificationCodes) {
      if (item.expiresAt > currentDate) {
        return {
          success: true,
          hasVerificationCode: true,
        };
      }
    }
  }
  return {
    success: true,
    hasVerificationCode: false,
  };
}

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

async function sendVerificationEmail(email, fname) {
  const validationCode = uuidv1();
  const tempAcct = new Models.TempAccount({
    email: email,
    vcode: validationCode,
  });
  await tempAcct.save();
  const mailer = new Mailer();
  await mailer.sendTemplate(
    email,
    'email-verification',
    {
      fname: fname,
      email: email,
      code: validationCode,
    },
  );
}


/** Request to create and send a verification code */
router.post('/sendVerificationCode', async (ctx) => {
  if (!ctx.isAuthenticated() || !ctx.state.user) {
    ctx.status = 401;
    ctx.body = JSON.stringify({
      success: false,
      message: 'Must be authenticated',
    });
    return;
  }
  const user = ctx.state.user;
  if (user.email_verified) {
    ctx.body = JSON.stringify({
      success: false,
      message: 'Already verified',
    });
    return;
  }
  try {
    const response = await sendVerificationCode(user.email, user.firstname);
    ctx.status = response.status;
    ctx.body = JSON.stringify(response);
  } catch (err) {
    console.log('Error in auth/sendVerificationCode', err);
    ctx.status = 500;
  }
});

/** Check if user has a currently unused verification code */
router.get('/hasVerificationCode', async (ctx) => {
  if (!ctx.isAuthenticated() || !ctx.state.user) {
    ctx.status = 401;
    ctx.body = JSON.stringify({ success: false, message: 'Must be authenticated' });
    return;
  }
  const user = ctx.state.user;
  const ret = await hasVerificationCode(user);
  ctx.body = JSON.stringify(ret);
});

/** Combination of hasVerificationCode and sendVerificationCode */
router.post('/lookForAndSendCode', async (ctx) => {
  if (!ctx.isAuthenticated() || !ctx.state.user) {
    ctx.status = 401;
    ctx.body = JSON.stringify({ success: false, message: 'Must be authenticated' });
    return;
  }
  const user = ctx.state.user;
  console.log('user', user);
  if (user.email_verified) {
    ctx.body = JSON.stringify({
      success: true,
      hasVerificationCode: false,
      alreadyVerified: true,
    });
    return;
  }
  try {
    const res1 = await hasVerificationCode(user);
    console.log('res1', res1);
    if (res1.success && res1.hasVerificationCode === false) {
      // send verification code if user doesnt have one
      const res2 = await sendVerificationCode(user.email, user.firstname);
      console.log('res2', res2);
      ctx.status = res2.status;
      res2.email = user.email;
      ctx.body = JSON.stringify(res2);
    } else {
      // send appropriate response if user does have verification code
      res1.email = user.email;
      ctx.body = JSON.stringify(res1);
    }
  } catch (err) {
    console.log('Error in auth/lookForAndSendCode', err);
    ctx.status = 500;
  }
});

/** Verify email using code instead of link in email */
router.post('/verifyUsingCode', async (ctx) => {
  if (!ctx.isAuthenticated() || !ctx.state.user) {
    ctx.status = 400;
    ctx.body = JSON.stringify({
      success: false,
      message: 'Must be authenticated',
    });
    return;
  }
  const user = ctx.state.user;
  if (user.email_verified) {
    ctx.status = 400;
    ctx.body = JSON.stringify({
      success: false,
      message: 'Your account is already verified',
    });
    return;
  }
  const req = ctx.request.body;
  let codeInstance = null;
  try {
    codeInstance = await Models.VerificationCode.findOne({
      email: user.email,
      code: req.code,
    });
  } catch (err) {
    Logger.error(err);
    ctx.status = 500;
    ctx.body = 'Internal server error';
    return;
  }
  if (!codeInstance || codeInstance.expiresAt < Date.now()) {
    ctx.body = JSON.stringify({
      success: false,
      message: 'Invalid code',
    });
    return;
  }
  // Change user account to verify user
  try {
    const userAcct = await Models.Account.findOne({
      email: user.email,
    });
    userAcct.email_verified = true;
    await userAcct.save();
  } catch (err) {
    Logger.error(err);
    ctx.status = 500;
    ctx.body = 'Internal server error';
    return;
  }
  // Success
  ctx.body = JSON.stringify({
    success: true,
    message: 'success',
  });
  deleteVerificationCodeInstance(user.email, req.code);
});

router.post('/verify', async (ctx) => {
  const req = ctx.request.body;
  let tempAcct = null;
  try {
    tempAcct = await Models.TempAccount.findOne({
      vcode: req.code,
    });
  } catch (e) {
    Logger.error(e);
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
    Logger.error(e);
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
    Logger.error(e);
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
      Logger.error('Error when creating new org', err);
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
        account_type: req.account_type,
        default_org: defaultOrg,
        org_list: defaultOrg ? [defaultOrg] : [],
      },
      req.pwd,
    );
  } catch (err) {
    Logger.error('Error when creating account', err);
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
  // console.log(`Go to localhost:8080/validate/${validationCode}`);
  // const mailer = new Mailer();
  // try {
  //   await mailer.sendTemplate(
  //     email,
  //     'email-verification',
  //     {
  //       fname: req.fname,
  //       email: email,
  //       code: validationCode,
  //     },
  //   );
  // } catch (err) {
  //   const response = {
  //     success: false,
  //     message: 'Email could not be sent',
  //   };
  //   ctx.status = 500;
  //   ctx.body = JSON.stringify(response);
  //   return;
  // }
  const response = {
    success: true,
    message: 'Check your mailbox!',
  };
  ctx.body = JSON.stringify(response);
});

router.post('/changeEmail', async (ctx) => {
  if (ctx.isAuthenticated()) {
    if (!ctx.state.user.email_verified && ctx.request.body.newemail) {
      const oldEmail = ctx.state.user.email;
      const newEmail = ctx.request.body.newemail.toLowerCase();
      const user = await Models.Account.findOne({
        email: oldEmail,
        email_verified: false,
      });
      if (!user) { // user should always be found
        ctx.status = 500;
        ctx.body = 'Internal server error';
        return;
      }
      try {
        user.email = newEmail;
        await user.save();
        ctx.login(user);
      } catch (err) {
        console.log('Error updating user', err.code, err);
        if (err.code === 11000) { // duplicate key error
          ctx.body = JSON.stringify({
            success: false,
            message: 'User already exists',
          });
        } else {
          ctx.status = 500;
          ctx.body = 'Internal server error';
        }
        return;
      }
      if (ctx.request.body.sendcode) {
        await sendVerificationCode(newEmail, user.firstname);
      } else {
        await sendVerificationEmail(newEmail, user.firstname);
      }
      const response = {
        success: true,
        message: 'Changed email successfully',
      };
      ctx.body = JSON.stringify(response);
    } else {
      ctx.status = 400;
      ctx.body = 'Bad request';
    }
  } else {
    const response = {
      success: false,
      message: 'Must be authenticated',
    };
    ctx.body = JSON.stringify(response);
  }
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
