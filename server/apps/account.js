/*
 * Application processing
 *
 * /:id
 *   [Not implemented] View the status of an application
 *
 *   The "processing" status is intended to be used internally for employers.
 *   Applicant accounts will receive "submitted" in place for the actual
 *   status through the API.
 *
 * /:id/setStatus/:status
 *   Set the status of an application and notify the applicant
 *
 *   Valid statuses: submitted, processing, processed, accepted, rejected, withdrawn
 *
 * /:id/withdraw
 *   [Not implemented] Withdraw the application. Details TBD.
 */

// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import Hashids from 'hashids';

// Utils
import Models from '@/mongodb/Models';

const app = new Koa();
const router = new KoaRouter();

router.post('/unsubscribe/job-recommendation', async (ctx) => {
  const hashids = new Hashids();
  const req = ctx.request.body;
  const uid = hashids.decodeHex(req.uid);
  try {
    await Models.Account.findOneAndUpdate(
      { '_id': uid },
      { $set: { 'preferences.jobAlertUnsubscribed': true } },
      { new: true },
    );
  } catch (err) {
    console.log(err);
    ctx.body = JSON.stringify({
      success: false,
      message: 'Error occured!',
    });
    return;
  }
  ctx.body = JSON.stringify({
    success: true,
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
