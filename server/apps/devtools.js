// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';

// Mailer
import Mailer from '@/utils/Mailer';

// Scheduler
import Scheduler from '@/Scheduler';
import Models from '@/mongodb/Models';

import Config from 'config';
import algoliasearch from 'algoliasearch';
import fs from 'fs';

const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();
const scheduler = require('node-schedule');

app.use(bodyParser());

// select all expired: true jobs
router.get('/getAllExpired', async ctx => {
  Models.Job.find({
    expired: true,
  }, (err, docs) => {
    console.log(docs);
  });
  ctx.body = 'showing expired';
});

// schedule the filtering and updating of expired jobs
router.get('/scheduleExpiration', async (ctx) => {
  const interval = '10 * * * * *'; // every 10 seconds (useful for testing)
  // const interval = '* 1 * * *'; // once a day (hour 1)
  const expireJobs = () => { // filter all expired jobs and update attribute
    Models.Job
      .find({}, (err, docs) => {
        const toExpire = docs // all jobs whose expiration date have passed
          .filter(job => {
            const expiration = job.expiry_date;
            const today = new Date();
            return today.getTime() > expiration.getTime();
          })
          .map(job => job._id); // extract id from job object
        console.log(toExpire);
        for (let i = 0; i < toExpire.length; ++i) {
          Models.Job.findOneAndUpdate(
            { '_id': toExpire[i]._id },
            { $set: { 'expired': true } },
            { new: true },
            (err1, docs1) => {
              console.log(docs1);
            },
          );
        }
      });
  };
  scheduler.scheduleJob(interval, expireJobs);
  ctx.body = 'job scheduled';
});
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
            <li><a href="/login">Log in</li>
            <li><a href="/data">GraphQL Playground</a></li>
            <li><a href="/trigger_scheduler">Trigger scheduler</li>
            <li><a href="/preview_email">Preview email</li>
          </ul>
        </p>
      </body>
    </html>
  `;
});

// Login form
router.get('/login', (ctx) => {
  const loginStatus = ctx.isAuthenticated() ? 'logged in' : 'not logged in';
  ctx.body = `
<!doctype html>
<html>
  <head>
    <title>Log in</title>
  </head>
  <body>
    <p>You are ${loginStatus}. <a href='/auth/logout'>Log out?</a></p>
    <form action='/auth/login' method='post'>
      <input name='email' placeholder='E-mail'>
      <input name='password' placeholder='Password'>
      <button type='submit'>Log in</button>
    </form>
  </body>
</html>
  `;
});

// Email preview
router.get('/preview_email', async (ctx) => {
  if (ctx.query.template) {
    const mailer = new Mailer();
    const template = ctx.request.query.template;
    const locals = JSON.parse(ctx.request.query.locals);
    ctx.body = await mailer.render(`${template}/html`, locals);
    return;
  }
  ctx.body = `
<!doctype html>
<html>
  <head>
    <title>Email preview</title>
  </head>
  <body>
    <form method='get'>
      <input name='template' placeholder='Template' value='email-verification'><br/>
      <textarea rows='10' cols='50' name='locals'>{
  "code": "123abc"
}
      </textarea></br/>
      <button type='submit'>Preview</button>
    </form>
  </body>
</html>
  `;
});

// Trigger scheduler
router.get('/trigger_scheduler', async (ctx) => {
  Scheduler.trigger();
  ctx.body = 'Triggered!';
});

// Trigger algolia backup
router.get('/backup_algolia', async (ctx) => {
  const appId = Config.get('algolia.appId');
  const adminApiKey = Config.get('private.algolia.adminApiKey');
  const algoliaClient = algoliasearch(appId, adminApiKey);
  const index = algoliaClient.initIndex('jobs');
  index.browse('').then((result) => {
    const hits = result.hits;
    console.log('Finished!');
    console.log('We got %d hits', hits.length);
    fs.writeFile('backup.json', JSON.stringify(hits, null, 2), 'utf-8', (err) => {
      if (err) {
        throw err;
      }
      console.log('Your index has been exported!');
    });
  });
  ctx.body = 'Triggered!';
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
