// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import BraintreeGateway from '@/BraintreeGateway';
import Models from '@/mongodb/Models';
import util from 'util';

const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();

app.use(bodyParser());

const ACTIONS = {
  activateJob: {
    description: 'Post a draft job, or re-post an expired job',
    price: 500,
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
      job.expired = false;
      job.expiry_date = new Date(Date.now());
      return job.save();
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
  if (!ctx.isAuthenticated() || !ctx.state.user) {
    ctx.status = 401;
    ctx.body = JSON.stringify({
      success: false,
      message: 'Must be authenticated',
    });
    return;
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
    ctx.body = JSON.stringify({
      success: false,
      message: `Failed to charge the user: ${e.message}`,
    });

    return;
  }

  // Fulfillment
  for (const action of req.actions) {
    try {
      await ACTIONS[action.name].fulfill(ctx, action);
    } catch (e) {
      ctx.status = 500;
      ctx.body = JSON.stringify({
        success: false,
        message: `${action.name} could not be fulfilled: ${e.message}`,
      });
      return;
    }
  }

  ctx.body = JSON.stringify({
    success: true,
    message: 'Purchase completed successfully',
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
