// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import BraintreeGateway from '@/BraintreeGateway';
import Models from '@/mongodb/Models';
import Mailer from '@/utils/Mailer';
import Algolia from '@/utils/Algolia';
import ErrorCode from '#/ErrorCode';
import ApiResponse from '@/utils/ApiResponse';
import DateHelper from '@/../client/utils/DateHelper';
import util from 'util';
import Config from 'config';
import GAuth from '@/utils/GoogleAuth';

const request = require('request');

const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();
const appId = Config.get('algolia.appId');
const apiKey = Config.get('private.algolia.adminApiKey');

app.use(bodyParser());

const ACTIONS = {
  activateJob: {
    description: 'Post a draft job, or re-post an expired job',
    price: 40,
    async validate(ctx, action) {
      if (!action.jobId) {
        throw new Error('Job ID is required');
      }
      const job = await Models.Job.findOne({
        _id: action.jobId,
      });

      if (!job) {
        throw new Error('Invalid job ID supplied');
      }
      if (job.active && !job.expired) {
        throw new Error('Job already active');
      }
    },
    async fulfill(ctx, action) {
      // FIXME: Race condition
      const job = await Models.Job.findOne({
        _id: action.jobId,
      });

      job.active = true;
      job.date = new Date(Date.now());
      job.expiry_date = DateHelper.getExpiryDate(job.date, 30);
      job.expired = false;
      await job.save();
      if (appId && apiKey) {
        console.log('-------------- job algolia added --------------');
        await Algolia.uploadJob(job);
      }

      const mailer = new Mailer();
      const locals = {
        jobId: job._id,
        jobname: job.title,
        fname: ctx.state.user.firstname,
        lname: ctx.state.user.lastname,
        postedby: job.posted_by,
        address: job.address,
        type: job.type,
        salary: job.salary,
      };
      await mailer.sendTemplate(
        ctx.state.user.email,
        'job-created',
        locals,
      );
    },
  },
  promoteJob: {
    description: 'Promote a job',
    price: 200,
    async validate(ctx, action) {
      if (!action.jobId) {
        throw new Error('Job ID is required');
      }
      const job = await Models.Job.findOne({
        _id: action.jobId,
      });

      if (!job) {
        throw new Error('Invalid job ID supplied');
      }
      if (job.promoted) {
        throw new Error('Job already promoted');
      }
    },
    async fulfill(ctx, action) {
      // FIXME: Race condition
      const job = await Models.Job.findOne({
        _id: action.jobId,
      });

      job.promoted = true;
      return job.save();
    },
  },
};

function generateToken(options = {}) {
  return new Promise((resolve, reject) => {
    BraintreeGateway.clientToken.generate(options, (err, response) => {
      if (err) return reject(err);
      return resolve(response);
    });
  });
}

function searchCustomerByEmail(email) {
  return new Promise((resolve, reject) => {
    BraintreeGateway.customer.search((search) => {
      search.email().is(email);
    }, (err, response) => {
      if (err) return reject(err);
      return resolve(response.ids);
    });
  });
}

function createCustomer(user) {
  return new Promise((resolve, reject) => {
    BraintreeGateway.customer.create({
      firstName: user.firstname,
      lastName: user.lastname,
      email: user.email,
    }, (err, response) => {
      if (err) return reject(err);
      return resolve(response.customer);
    });
  });
}

router.get('/getAuthorization', async (ctx) => {
  if (!ctx.isAuthenticated() || !ctx.state.user) {
    ctx.status = 401;
    ctx.body = JSON.stringify({
      success: false,
      message: 'Must be authenticated',
    });
    return;
  }

  const email = ctx.state.user.email;
  const customers = await searchCustomerByEmail(email);

  let customerId = null;
  if (customers.length === 0) {
    // Create new customer
    const customer = await createCustomer(ctx.state.user);
    customerId = customer.id;
  } else {
    customerId = customers[0];
  }

  const response = await generateToken({
    version: '3',
    customerId: customerId,
    options: {
      verifyCard: true,
    },
  });

  ctx.body = JSON.stringify(response.clientToken);
});

router.post('/createTransaction', async (ctx) => {
  const user = ctx.state.user;
  if (!ctx.isAuthenticated() || !user) {
    ctx.status = 401;
    ctx.body = JSON.stringify({
      success: false,
      message: 'Must be authenticated',
    });
    return;
  }
  if (!user.email_verified) {
    const userAcct = await Models.Account.findOne({
      email: user.email,
    });
    userAcct.email_verified = true;
    await userAcct.save();
  }
  const req = ctx.request.body;

  // Validation
  let credits = 0;
  if (!Array.isArray(req.actions)) {
    ctx.status = 400;
    ctx.body = JSON.stringify({
      success: false,
      message: 'Invalid actions array',
    });
    return;
  }
  let jobId = '';
  for (const action of req.actions) {
    if (!Object.prototype.hasOwnProperty.call(ACTIONS, action.name)) {
      // Invalid action
      ctx.status = 400;
      ctx.body = JSON.stringify({
        success: false,
        message: `${action.name} is not a valid action`,
      });
      return;
    }
    if (action.name === 'activateJob' && action.jobId) {
      jobId = action.jobId;
    }
    try {
      await ACTIONS[action.name].validate(ctx, action);
    } catch (e) {
      ctx.status = 400;
      ctx.body = JSON.stringify({
        success: false,
        message: `${action.name} failed validation: ${e.message}`,
      });
      return;
    }

    credits += ACTIONS[action.name].price;
  }
  // Charge
  // TODO: remove 'production' case when deploying to 'prod' branch
  if (!(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development')) {
    try {
      const sale = util.promisify(BraintreeGateway.transaction.sale).bind(BraintreeGateway.transaction);
      const result = await sale({
        amount: (credits / 100).toString(),
        paymentMethodNonce: req.paymentMethodNonce,
        options: {
          submitForSettlement: true,
        },
      });
      if (!result.success) {
        throw new Error(result.message);
      }
    } catch (e) {
      ctx.status = 500;
      ctx.body = new ApiResponse(
        ErrorCode.PaymentError,
        e.message,
        ctx,
      );
      return;
    }
  }

  // Fulfillment
  for (const action of req.actions) {
    try {
      await ACTIONS[action.name].fulfill(ctx, action);
    } catch (e) {
      ctx.status = 500;
      ctx.body = new ApiResponse(
        ErrorCode.PaymentError,
        `Action "${action.name}" yielded "${e.message}"`,
        ctx,
      );
      return;
    }
  }
  ctx.body = JSON.stringify({
    success: true,
    message: 'Purchase completed successfully',
  });

  if (process.env.NODE_ENV === 'production' && jobId) {
    // Update Google indexing
    GAuth.getAuthRequestHeaders()
      .then(value => {
        let accessToken = '';
        if (value && value.Authorization) {
          accessToken = value.Authorization.slice(7);
        } else {
          accessToken = GAuth.getAccessToken();
        }
        const options = {
          url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
          method: 'POST',
          // Your options, which must include the Content-Type and auth headers
          headers: {
            'Content-Type': 'application/json',
          },
          auth: { 'bearer': accessToken },
          // Define contents here. The structure of the content is described in the next step.
          json: {
            'url': `https://kunvet.com/job/${jobId}`,
            'type': 'URL_UPDATED',
          },
        };
        request(options, (error, response, body) => {
          console.log(body);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
