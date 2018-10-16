// Koa
import Koa from 'koa';
/* import KoaRouter from 'koa-router';

// GraphiQL
import { graphiqlKoa } from 'apollo-server-koa';

// Mailer
import Mailer from '@/utils/Mailer';

// Scheduler
import Scheduler from '@/Scheduler';

const bodyParser = require('koa-bodyparser'); */

const app = new Koa();
/* const router = new KoaRouter();

app.use(bodyParser());

// Help info
router.get('/', (ctx) => {
  ctx.body = `
    <!doctype html>
    <html>
      <head>
        <title>Kunvet V3</title>
      </head>
      <body>
        <h1>Kunvet Server</h1>
        <p>
          Running in development mode. Useful tools:
          <ul>
            <li><a href="/login">Log in</li>
            <li><a href="/graphiql">Graph<em>i</em>QL</a></li>
            <li><a href="/trigger_scheduler">Trigger scheduler</li>
            <li><a href="/preview_email">Preview email</li>
          </ul>
        </p>
      </body>
    </html>
  `;
});

// Interactive GraphiQL interface
router.get('/graphiql', graphiqlKoa({
  endpointURL: '/data',
}));

// Login form
router.get('/login', (ctx) => {
  const loginStatus = ctx.isAuthenticated() ? 'logged in' : 'not logged in';
  ctx.body = `
<!doctype html>
<html>
  <head>
    <title>Log in</title>
  </head>
  <body>
    <p>You are ${loginStatus}. <a href='/auth/logout'>Log out?</a></p>
    <form action='/auth/login' method='post'>
      <input name='email' placeholder='E-mail'>
      <input name='password' placeholder='Password'>
      <button type='submit'>Log in</button>
    </form>
  </body>
</html>
  `;
});

// Email preview
router.get('/preview_email', async (ctx) => {
  if (ctx.query.template) {
    const mailer = new Mailer();
    const template = ctx.request.query.template;
    const locals = JSON.parse(ctx.request.query.locals);
    ctx.body = await mailer.render(`${template}/html`, locals);
    return;
  }
  ctx.body = `
<!doctype html>
<html>
  <head>
    <title>Email preview</title>
  </head>
  <body>
    <form method='get'>
      <input name='template' placeholder='Template' value='email-verification'><br/>
      <textarea rows='10' cols='50' name='locals'>{
  "code": "123abc"
}
      </textarea></br/>
      <button type='submit'>Preview</button>
    </form>
  </body>
</html>
  `;
});

// Trigger scheduler
router.get('/trigger_scheduler', async (ctx) => {
  Scheduler.trigger();
  ctx.body = 'Triggered!';
});

app.use(router.routes());
app.use(router.allowedMethods()); */

export default app;
