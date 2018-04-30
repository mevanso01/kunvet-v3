// ===========
// | Imports |
// ===========

// Source map support
import 'source-map-support/register';
// const fs = require("fs")
// Koa
import Koa from 'koa';
import KoaMount from 'koa-mount';
import KoaBodyParser from 'koa-bodyparser';
import KoaSession from 'koa-session';
import KoaPassport from 'koa-passport';

import REPL from 'repl';

import Logger from 'winston';

// CORS
import Cors from '@/Cors';

// Options
import '@/options/passport';
import '@/options/logger';
import '@/options/tasks';

// Sub apps
import AuthApp from '@/apps/auth';
import GraphQLApp from '@/apps/graphql';
import DevToolsApp from '@/apps/devtools';
import FileServerApp from '@/apps/fileserver';
import ApplicationApp from '@/apps/application';
import ProfilePicApp from '@/apps/profile_pic';
import ResetPasswordApp from '@/apps/reset_password';

// Our stuff
import Db from '@/mongodb/Db';
import Models from '@/mongodb/Models';

// ========
// | Main |
// ========

Logger.info(`Kunvet Server ${process.env.COMMIT} (${process.env.NODE_ENV})`);

// const path = require('path');
// let historyApiFallback = require('koa-history-api-fallback');

const port = process.env.PORT || 3000;
const app = new Koa();

// Body parser
app.use(KoaBodyParser());

// Session
app.keys = ['rua'];
app.use(KoaSession({}, app));

// CORS
app.use(Cors);

// Passport
app.use(KoaPassport.initialize());
app.use(KoaPassport.session());

// Mount sub apps
app.use(KoaMount('/data', GraphQLApp));
app.use(KoaMount('/auth', AuthApp));
app.use(KoaMount('/file', FileServerApp));
app.use(KoaMount('/application', ApplicationApp));
app.use(KoaMount('/profile-pic', ProfilePicApp));
app.use(KoaMount('/reset-password', ResetPasswordApp));

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

// Exports

// Google Cloud Functions
const gcf = app.callback();

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
  lambda = Lambda.get(app);
} else if (process.env.LAMBDA_TASK_ROOT && process.env.AWS_EXECUTION_ENV) {
  Logger.warn('Running on AWS Lambda, but this server is not built for Lambda');
}
/* eslint-enable */

export { gcf, lambda };
