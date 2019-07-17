// Authentication sub-app
//
// This sub-app assumes that koa-passport is already
// initialized.

// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';

// Passport
// import KoaPassport from 'koa-passport';

// Utils
import Mailer from '@/utils/Mailer';
import Models from '@/mongodb/Models';

// Other
// import promisify from 'es6-promisify';
import uuidv1 from 'uuid/v1';

const app = new Koa();
const router = new KoaRouter();

router.post('/reset', async (ctx) => {
  const req = ctx.request.body;
  console.log('Req', req);
  if (!req.token || !req.newpassword) {
    const response = {
      success: false,
      message: 'Invalid params',
    };
    ctx.body = JSON.stringify(response);
    return;
  }

  let resetInstance = null;
  try {
    resetInstance = await Models.PasswordResetInstance.findOne({
      token: req.token,
    });
  } catch (e) {
    console.error(e);
    ctx.status = 500;
    ctx.body = 'Internal server error';
    return;
  }
  console.log('resetInstance', resetInstance);
  if (!resetInstance) {
    const response = {
      success: false,
      message: 'Invalid code',
    };
    ctx.body = JSON.stringify(response);
    return;
  }
  const userEmail = resetInstance.email.toLowerCase();
  let userAcct = null;
  try {
    userAcct = await Models.Account.findOne({
      email: userEmail,
    });
  } catch (e) {
    console.error(e);
    ctx.status = 500;
    ctx.body = 'Internal server error';
    return;
  }
  if (!userAcct) {
    // instance exists but user account doesnt?
    const response = {
      success: false,
      message: 'No accounts with that email',
    };
    ctx.body = JSON.stringify(response);
    return;
  }

  // Resetting password
  try {
    /* user object is userAcct. New password is req.newpassword */
    // FIXME - the following 2 lines of code done work
    await userAcct.setPassword(req.newpassword);
    await userAcct.save();

    await Models.PasswordResetInstance.remove({
      token: req.token,
    });
  } catch (e) {
    console.error(e);
    ctx.status = 500;
    ctx.body = 'Internal server error';
    return;
  }

  // ADD MAILER STUFF HERE - VIVEK
    /* const mailer = new Mailer();
  try {
    await mailer.sendTemplate(
      req.email,
      'password-changeds',
      {
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
  }*/
  const response = {
    success: true,
    message: 'Password reset!',
  };
  ctx.body = JSON.stringify(response);
});

/*
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
*/

router.post('/request-reset', async (ctx) => {
  const req = ctx.request.body;

  if (!req.email) {
    const response = {
      success: false,
      message: 'No email provided',
    };
    ctx.body = JSON.stringify(response);
    return;
  }

  let account = null;
  try {
    account = await Models.Account.findOne({
      email: req.email,
    });
  } catch (err) {
    const response = {
      success: false,
      message: 'Error finding account',
    };
    ctx.body = JSON.stringify(response);
    return;
  }

  if (!account) {
    const response = {
      success: false,
      message: 'No account with this email exists',
    };
    ctx.body = JSON.stringify(response);
    return;
  }

  const validationCode = uuidv1();
  const x = new Models.PasswordResetInstance({
    user_id: account._id,
    email: req.email,
    token: validationCode,
  });
  x.save();

  const mailer = new Mailer();
  try {
    await mailer.sendTemplate(
      req.email,
      'reset-password',
      {
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

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
