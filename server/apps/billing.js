// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import BraintreeGateway from '@/BraintreeGateway';
import util from 'util';

const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();

app.use(bodyParser());

const ACTIONS = {
  activateJob: {
    description: 'Post a draft job, or re-post an expired job',
    price: 500,
    validate(ctx, action) {
      console.log(ctx, action);
      return true;
    },
    fulfill(ctx, action) {
      console.log(ctx, action);
      return true;
    },
  },
  promoteJob: {
    description: 'Promote a job',
    price: 200,
    validate(ctx, action) {
      console.log(ctx, action);
      return true;
    },
    fulfill(ctx, action) {
      console.log(ctx, action);
      return true;
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

router.post('/postTransaction', async (ctx) => {
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

  for (const action of req.actions) {
    if (!Object.prototype.hasOwnProperty.call(ACTIONS, action.name)) {
      // Invalid action
      ctx.status = 401;
      ctx.body = JSON.stringify({
        success: false,
        message: `${action.name} is not a valid action`,
      });
      return;
    }
    try {
      ACTIONS[action.name].validate(ctx, action);
    } catch (e) {
      ctx.status = 401;
      ctx.body = JSON.stringify({
        success: false,
        message: `${action.name} failed validation: ${e.getMessage()}`,
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
    console.log(result);
  } catch (e) {
    ctx.status = 401;
    ctx.body = JSON.stringify({
      success: false,
      message: `Failed to charge the user: ${e.getMessage()}`,
    });
    // return;
  }

  ctx.body = JSON.stringify({
    success: true,
    message: 'Thanks for the cash!',
  });

  /*

  // Fulfillment
  for (const action of req.actions) {
  }
  */
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
