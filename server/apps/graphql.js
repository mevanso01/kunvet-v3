// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaBody from 'koa-bodyparser';

// GraphQL and Apollo
import { graphqlKoa } from 'apollo-server-koa';

// Our stuff
import Schema from '../graphql/Schema';

const app = new Koa();
const router = new KoaRouter();

// GraphQL endpoint
function buildOptions(ctx) {
  return {
    schema: Schema,
    context: {
      user: ctx.state.user,
    },
  };
}

router.post('/graphql', KoaBody(), (ctx) => {
  const options = buildOptions(ctx);
  return graphqlKoa(options)(ctx);
});
router.get('/graphql', (ctx) => {
  const options = buildOptions(ctx);
  return graphqlKoa(options)(ctx);
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
