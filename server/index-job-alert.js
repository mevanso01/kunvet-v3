// ===========
// | Imports |
// ===========

// Source map support
import 'source-map-support/register';

import Koa from 'koa';
import KoaMount from 'koa-mount';
import KoaBodyParser from 'koa-bodyparser';

import REPL from 'repl';

import Logger from '@/Logger';

// Options
import '@/options/job-alert';

// Sub apps
import DevToolsApp from '@/apps/devtools';

// Our stuff
import Db from '@/mongodb/Db';
import Models from '@/mongodb/Models';
import Algolia from '@/utils/Algolia';

// ========
// | Main |
// ========

const port = process.env.PORT || 3001;
const app = new Koa();

// Body parser
app.use(KoaBodyParser());

// Mount sub apps
if (process.env.NODE_ENV !== 'production') {
  // Development goodies
  app.use(KoaMount('/', DevToolsApp));
}

// Let's get started!
Db.connect()
  .then(() => {
    Logger.info('Connected to MongoDB!');

    // Expose an interactive REPL
    if (process.env.NODE_ENV !== 'production') {
      const r = REPL.start('kunvet> ');
      r.context.Models = Models;
      r.context.mongoose = Db.mongoose;
      r.context.Algolia = Algolia;
    }
  })
  .catch((reason) => {
    // We could not connect to the database, and the server won't be useful
    Logger.info(`Failed to connect to MongoDB: ${reason}`);
    process.exit(1);
  });

if (!process.env.DISABLE_SERVER) {
  app.listen(port, () => {
    Logger.info(`Up and running! Listening on port ${port}`);
  });
}

// AWS Lambda
/* eslint-disable import/no-mutable-exports, global-require */
let lambda = (event, context) => {
  context.fail({
    success: false,
    message: 'Deployment error',
  });
};
if (process.env.TARGET === 'lambda') {
  const Lambda = require('@/exports/Lambda').default;
  lambda = Lambda.get();
} else if (process.env.LAMBDA_TASK_ROOT && process.env.AWS_EXECUTION_ENV) {
  Logger.warn('Running on AWS Lambda, but this server is not built for Lambda');
}
/* eslint-enable */

// Exports
export default lambda;
