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
router.post('/login', KoaPassport.authenticate('local', {
  // FIXME
  successRedirect: '/',
  failureRedirect: '/failed',
}));

router.get('/logout', (ctx) => {
  ctx.logout();
  ctx.body = 'Alrighty';
});

app.use(KCors());
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
