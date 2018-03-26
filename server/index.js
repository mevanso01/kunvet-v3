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

// CORS
import Cors from '@/Cors';

// Options
import '@/options/passport';

// Sub apps
import AuthApp from '@/apps/auth';
import GraphQLApp from '@/apps/graphql';
import DevToolsApp from '@/apps/devtools';
import FileServerApp from '@/apps/fileserver';
import ApplicationApp from '@/apps/application';

// Our stuff
import Db from '@/mongodb/Db';
import Models from '@/mongodb/Models';
import Logger from '@/utils/Logger';

// ========
// | Main |
// ========

Logger.info('Kunvet server');

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

if (process.env.NODE_ENV !== 'production') {
  // Development goodies
  Logger.info('Running in development mode');
  app.use(KoaMount('/', DevToolsApp));
} else {
  // Production mode
  Logger.info('Running in production mode');
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
let lambda = null;
if (process.env.TARGET === 'lambda') {
  const AwsServerlessExpress = require('aws-serverless-express');
  const server = AwsServerlessExpress.createServer(app.callback());
  lambda = (event, context) => AwsServerlessExpress.proxy(server, event, context);
}
/* eslint-enable */

export { gcf, lambda };
