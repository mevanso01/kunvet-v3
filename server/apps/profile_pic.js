/*
 * Public profile picture processing.
 */

// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';

// Utils
import Models from '@/mongodb/Models';

const app = new Koa();
const router = new KoaRouter();

router.get('/account/:id', async (ctx) => {
  try {
    const _id = ctx.params.id;
    const account = await Models.Account.findOne({ _id });
    const response = {
      profilePictureId: account.profile_pic,
    };
    ctx.body = JSON.stringify(response);
  } catch (e) {
    const response = {
      success: false,
      message: 'Invalid account',
    };
    ctx.status = 404;
    ctx.body = JSON.stringify(response);
  }
});

router.get('/business/:id', async (ctx) => {
  try {
    const _id = ctx.params.id;
    const organization = await Models.Organization.findOne({ _id });
    const response = {
      profilePictureId: organization.profile_pic,
    };
    ctx.body = JSON.stringify(response);
  } catch (e) {
    const response = {
      success: false,
      message: 'Invalid account',
    };
    ctx.status = 404;
    ctx.body = JSON.stringify(response);
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
