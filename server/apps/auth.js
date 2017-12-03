// Authentication sub-app
//
// This sub-app assumes that koa-passport is already
// initialized.

// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import KCors from 'kcors';

// Passport
import KoaPassport from 'koa-passport';

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

app.use(KCors());
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
