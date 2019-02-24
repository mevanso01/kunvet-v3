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

// Utils
import ErrorCode from '#/ErrorCode';
import ApiResponse from '@/utils/ApiResponse';
import Models from '@/mongodb/Models';
import Mailer from '@/utils/Mailer';
import Data from '@/utils/Data';
import EmailFunctions from '@/utils/EmailFunctions';

const app = new Koa();
const router = new KoaRouter();

async function setStatus(applicationId, status, ctx = null, token = null) {
  let application = null;
  let job = null;
  let user = null;
  let employer = ctx ? ctx.state.user : null;
  try {
    application = await Models.Applicant.findOne({
      _id: applicationId,
    });
    job = await Models.Job.findOne({
      _id: application.job_id,
    });
    user = await Models.Account.findOne({
      _id: application.user_id,
    });
    if (!employer) {
      employer = await Models.Account.findOne({
        _id: job.user_id,
      });
    }
  } catch (e) {
    return ApiResponse(
      ErrorCode.InvalidApplication,
    );
  }

  if (ctx && !ctx.state.user._id.equals(job.user_id)) {
    // Not the employer
    return ApiResponse(
      ErrorCode.InvalidApplication,
    );
  }

  if (token && application.tracking_token !== token) {
    // Token incorrect
    return ApiResponse(
      ErrorCode.InvalidApplication,
    );
  }

  if (application.status === status) {
    // application status is already set
    return ApiResponse();
  }

  if (application.status !== 'submitted' && status === 'opened') {
    // application can only be set to 'opened' in the 'submitted' state
    return ApiResponse(
      ErrorCode.BadRequest,
    );
  }

  // Set the status
  application.status = status;
  try {
    await application.save();
  } catch (e) {
    return ApiResponse(
      ErrorCode.InternalError,
    );
  }

  const emailBody = {
    replyTo: employer.email,
    fname: user.firstname,
    name: application.name,
    jobname: job.title,
  };


  // Send notification to applicant //working on this function
  if (['opened', 'accepted', 'rejected'].includes(status)) {
    try {
      EmailFunctions.sendApplicationStatus(user, emailBody); // moved previous code into EmailFunctions.js
    } catch (e) {
      console.log('ERROR', e);
    }

    try {
      user.notifications.push({
        text: `Your application was ${ctx.params.status}`,
        route: '/appliedjobs',
        notification_type: 'application',
        date: Date.now,
      });
      user.save();
    } catch (e) {
      console.log('ERROR', e);
    }
  }

  // notification under special condition
  if (status === 'opened') {
    // if user has notifications enabled, send notification
  }

  return ApiResponse();
}

router.get('/:id/tracking/:token', async (ctx) => {
  // Always return the tracking pixel, regardless of actual result
  ctx.set('Content-Type', 'image/gif');
  ctx.body = Data.TrackingGif;

  const applicationId = ctx.params.id;
  const token = ctx.params.token;
  await setStatus(applicationId, 'opened', null, token);
});

router.post('/:id/setStatus/:status', async (ctx) => {
  if (!ctx.isAuthenticated()) {
    // Unauthenticated
    const response = {
      success: false,
      message: 'Authentication required',
    };
    ctx.status = 401;
    ctx.body = JSON.stringify(response);
    return;
  }

  const applicationId = ctx.params.id;
  ctx.body = await setStatus(applicationId, ctx.params.status, ctx);
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
