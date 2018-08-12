// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaBody from 'koa-bodyparser';

// GraphQL and Apollo
import { graphqlKoa } from 'apollo-server-koa';
// import NoIntrospection from 'graphql-disable-introspection';

// Logger
import Logger from 'winston';

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
  if (
    process.env.NODE_ENV === 'production' ||
    process.env.GRAPHQL_PRODUCTION
  ) {
    // options.validationRules.push(NoIntrospection);
    options.formatError = (e) => {
      Logger.error(e);
      return 'An error occured.';
    };
  } else {
    options.formatError = (e) => {
      Logger.error(e);
      return e;
    };
  }
  return options;
}

router.post('/', KoaBody(), (ctx) => {
  const options = buildOptions(ctx);
  return graphqlKoa(options)(ctx);
});
router.get('/', (ctx) => {
  const options = buildOptions(ctx);
  return graphqlKoa(options)(ctx);
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
