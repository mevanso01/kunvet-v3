// ===========
// | Imports |
// ===========

// Source map support
import 'source-map-support/register';
// const fs = require("fs")
// Koa
import Koa from 'koa';
import KoaMount from 'koa-mount';
// import KoaBodyParser from 'koa-bodyparser';
import KoaSession from 'koa-session';
import KoaPassport from 'koa-passport';

import REPL from 'repl';
// CORS
import cors from './cors';

// Passport
import './auth';

// Sub apps
import AuthApp from './apps/auth';
import GraphQLApp from './apps/graphql';
import DevToolsApp from './apps/devtools';
import ClientApp from './apps/client';
import FileServerApp from './apps/fileserver';
import ApplicationApp from './apps/application';
import RuaApp from './apps/rua';

// Our stuff
import Db from './mongodb/Db';
import Models from './mongodb/Models';
import Logger from './utils/Logger';

// ========
// | Main |
// ========

Logger.info('Kunvet server');

// const path = require('path');
// let historyApiFallback = require('koa-history-api-fallback');

const port = process.env.PORT || 3000;
const app = new Koa();

// Body parser
/* app.use(KoaBodyParser({
  enableTypes: ['json', 'form', 'multipart'],
})); */

// Session
app.keys = ['rua'];
app.use(KoaSession({}, app));

// CORS
app.use(cors);

// Passport
app.use(KoaPassport.initialize());
app.use(KoaPassport.session());

// Mount sub apps
app.use(KoaMount('/srv', GraphQLApp));
app.use(KoaMount('/auth', AuthApp));
app.use(KoaMount('/file', FileServerApp));
app.use(KoaMount('/application', ApplicationApp));
app.use(KoaMount('/rua', RuaApp));

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

app.listen(port, () => {
  Logger.info(`Up and running! Listening on port ${port}`);
});
