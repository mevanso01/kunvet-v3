// Koa
import Koa from 'koa';

// GraphQL and Apollo
import { ApolloServer } from 'apollo-server-koa';

// Logger
import Logger from 'winston';

// Our stuff
import Schema from '../graphql/Schema';

const app = new Koa();

// GraphQL endpoint
function buildOptions() {
  const options = {
    schema: Schema,
    context: ({ ctx }) => ({
      user: ctx.state.user,
    }),
    playground: {
      tabs: [
        {
          endpoint: '/data',
        },
      ],
    },
  };
  if (
    process.env.NODE_ENV === 'production' ||
    process.env.GRAPHQL_PRODUCTION
  ) {
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

const server = new ApolloServer(buildOptions());
server.applyMiddleware({
  app,
  path: '/',
});

export default app;
