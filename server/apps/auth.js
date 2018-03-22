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

  let default_org = null;
  if (req.business_name) {
    const org = new Models.Organization({
      business_name: req.business_name,
      email: req.email,
    });
    await org.save();
    default_org = org._id;
  }
  try {
    await promiseRegister(
      {
        email: req.email,
        firstname: req.fname,
        lastname: req.lname,
        default_org: default_org,
      },
      req.pwd,
    );
  } catch (err) {
    console.log(err);
    if (err.name === 'UserExistsError') {
      const response = {
        success: false,
        message: 'User already exists',
      };
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

  const validationCode = uuidv1();

  const x = new Models.TempAccount({
    email: req.email,
    vcode: validationCode,
  });
  x.save();
  // Remove me when email is complete
  console.log(`Go to localhost:8080/validate/${validationCode}`);
  const mailer = new Mailer();
  console.log('Trying to mail');
  try {
    await mailer.sendTemplate(
      req.email,
      'email-verification',
      {
        firstname: req.fname,
        lastname: req.lname,
        email: req.email,
        code: validationCode,
      },
    );
  } catch (err) {
    const response = {
      success: false,
      message: 'Email could not be sent',
    };
    ctx.body = JSON.stringify(response);
    return;
  }
  const response = {
    success: true,
    message: 'Check your mailbox!',
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

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
