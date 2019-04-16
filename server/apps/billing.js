// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import BraintreeGateway from '@/BraintreeGateway';

const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();

app.use(bodyParser());

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

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
