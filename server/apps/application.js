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
import KCors from 'kcors';

// Utils
import Models from '@/mongodb/Models';
import Mailer from '@/utils/Mailer';

const app = new Koa();
const router = new KoaRouter();

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
  let application = null;
  let job = null;
  try {
    application = await Models.Applicant.findOne({
      _id: applicationId,
    });
    job = await Models.Job.findOne({
      _id: application.job_id,
    });
  } catch (e) {
    // Invalid application

    const response = {
      success: false,
      message: 'Invalid application',
    };
    ctx.status = 404;
    ctx.body = JSON.stringify(response);

    return;
  }

  if (ctx.state.user._id !== job.posted_by) {
    // Not the employer

    const response = {
      success: false,
      message: 'Invalid application',
    };
    ctx.status = 404;
    ctx.body = JSON.stringify(response);

    return;
  }

  // Set the status
  application.status = ctx.params.status;
  try {
    await application.save();
  } catch (e) {
    const response = {
      success: false,
      message: 'Could not save - Invalid status?',
    };
    ctx.status = 500;
    ctx.body = JSON.stringify(response);

    return;
  }

  // Send notification to applicant
  if (['processed', 'accepted', 'rejected'].includes(ctx.params.status)) {
    const mailer = new Mailer();
    try {
      await mailer.sendTemplate(
        application.email,
        `application-${ctx.params.status}`,
        {
          name: application.name,
        },
      );
    } catch (e) {
      const response = {
        success: false,
        message: 'Email could not be sent',
      };
      ctx.body = JSON.stringify(response);
      return;
    }
  }

  const response = {
    success: true,
    message: 'Status updated',
  };
  ctx.body = JSON.stringify(response);
});

app.use(KCors());
app.use(router.routes());
app.use(router.allowedMethods());

export default app;

