// Source map support
import 'source-map-support/register';

// Koa
import http from 'http';
import Koa from 'koa';
import KoaMount from 'koa-mount';

// Sub apps
import GraphQLApp from './apps/graphql';
import DevToolsApp from './apps/devtools';
import ClientApp from './apps/client';

// Our stuff
import Db from './mongodb/Db';
import Logger from './utils/Logger';

Logger.info('Kunvet server');

const port = process.env.PORT || 3000;
const app = new Koa();

app.use(KoaMount('/srv', GraphQLApp));

if (process.env.NODE_ENV !== 'production') {
  // Development goodies
  Logger.info('Running in development mode');
  app.use(KoaMount('/', DevToolsApp));
} else {
  // Production mode
  Logger.info('Running in production mode');
  app.use(KoaMount('/', ClientApp));
}

// Let's get started!
Db.connect()
  .then(() => {
    Logger.info('Connected to MongoDB!');
  })
  .catch((reason) => {
    // We could not connect to the database, and the server won't be useful
    Logger.info(`Failed to connect to MongoDB: ${reason}`);
    process.exit(1);
  });

http.createServer(app.callback()).listen(port, () => {
  Logger.info(`Up and running! Listening on port ${port}`);
});

