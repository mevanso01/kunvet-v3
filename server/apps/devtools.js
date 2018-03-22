// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';

// GraphiQL
import { graphiqlKoa } from 'apollo-server-koa';

const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();

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

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
