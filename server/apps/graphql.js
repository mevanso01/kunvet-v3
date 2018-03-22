// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaBody from 'koa-bodyparser';

// GraphQL and Apollo
import { graphqlKoa } from 'apollo-server-koa';
import NoIntrospection from 'graphql-disable-introspection';

// Our stuff
import Schema from '../graphql/Schema';

const app = new Koa();
const router = new KoaRouter();

// GraphQL endpoint
function buildOptions(ctx) {
  const options = {
    schema: Schema,
    context: {
      user: ctx.state.user,
    },
    validationRules: [],
  };
  if (process.env.NODE_ENV === 'production' || process.env.NO_INTROSPECTION) {
    options.validationRules.push(NoIntrospection);
  }
  return options;
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
