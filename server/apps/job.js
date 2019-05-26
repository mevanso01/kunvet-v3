// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';

// Utils
// import ErrorCode from '#/ErrorCode';
// import ApiResponse from '@/utils/ApiResponse';
import Models from '@/mongodb/Models';
// import Mailer from '@/utils/Mailer';
// import Data from '@/utils/Data';

const app = new Koa();
const router = new KoaRouter();
const days = 24 * 60 * 60 * 1000; // in milliseconds

router.post('/repost/:id', async (ctx) => {
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
  const jobId = ctx.params.id;
  let job = null;
  const currDate = Date.now();
  const expiryDate = currDate + (30 * days);

  try {
    job = await Models.Job.findOne({
      _id: jobId,
    });

    if (!job || !ctx.state.user._id.equals(job.user_id)) {
      const response = {
        success: false,
        message: 'Invalid job',
      };
      ctx.status = 404;
      ctx.body = JSON.stringify(response);
      return;
    }

    if (currDate < job.expiry_date) {
      const response = {
        success: false,
        message: 'Job not due for repost',
      };
      ctx.status = 400;
      ctx.body = JSON.stringify(response);
      return;
    }

    job.date = currDate;
    job.expiry_date = expiryDate;
    job.active = true;
    job.expired = false;
    job.save();
  } catch (e) {
    const response = {
      success: false,
      message: 'Internal Server Error',
    };
    ctx.status = 500;
    ctx.body = JSON.stringify(response);
    return;
  }

  const response = {
    success: true,
    message: expiryDate,
  };
  ctx.body = JSON.stringify(response);
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
