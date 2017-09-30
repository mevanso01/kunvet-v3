// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import KCors from 'kcors';

// GraphiQL
import { graphiqlKoa } from 'apollo-server-koa';

const app = new Koa();
const router = new KoaRouter();

app.use(KCors());

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
            <li><a href="/graphiql">Graph<em>i</em>QL</a></li>
          </ul>
        </p>
      </body>
    </html>
  `;
});

// Interactive GraphiQL interface
router.get('/graphiql', graphiqlKoa({
  endpointURL: '/srv/graphql',
}));

router.get('/test', (ctx) => {
  ctx.body = "hello";
  console.log(ctx.request);
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
