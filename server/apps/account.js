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

router.post('/feedback/job-recommendation-available', async (ctx) => {
  const hashids = new Hashids();
  const req = ctx.request.body;
  const uid = hashids.decodeHex(req.userHash);

  try {
    const q1 = await Models.Feedback.find({ 'user_id': uid, 'alert_uid': req.alert_date });
    if (q1.length > 0) {
      ctx.body = JSON.stringify({
        success: true,
        available: false,
      });
      return;
    }
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
    available: true,
  });
});

router.post('/feedback/job-recommendation', async (ctx) => {
  const hashids = new Hashids();
  const req = ctx.request.body;
  const uid = hashids.decodeHex(req.userHash);

  try {
    const q1 = await Models.Feedback.find({ 'user_id': uid, 'alert_uid': req.alert_date });
    if (q1.length > 0) {
      ctx.body = JSON.stringify({
        success: false,
        message: 'duplicated',
      });
      return;
    }
    const user = await Models.Account.find({ '_id': uid });
    if (!user || user.length === 0) {
      ctx.body = JSON.stringify({
        success: false,
        message: 'Error occured!',
      });
      return;
    }
    const feedback = new Models.Feedback({
      user_id: uid,
      email: user[0].email,
      type: req.type === 'yes' ? 'positive' : 'negative',
      note: req.note,
      jobs: req.jobs.split(','),
      reason: req.reason,
      alert_date: new Date(Number(req.alert_date)),
      alert_uid: Number(req.alert_date),
    });
    await feedback.save();
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
