// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';

// Utils
import Mailer from '@/utils/Mailer';

// GraphiQL
import { graphiqlKoa } from 'apollo-server-koa';


const bodyParser = require('koa-bodyparser');
const multer = require('koa-multer');
const path = require('path');
const fs = require('fs');

const app = new Koa();
const router = new KoaRouter();

var _storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'server/uploads/');
  },
  filename: function filename(req, file, cb) {
    cb(null, `${req.body.userid}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

var upload = multer({ storage: _storage });
// var upload = multer({ dest: 'uploads/' });

app.use(bodyParser());

// Help info
router.get('/', (ctx) => {
  ctx.body = `
    <!doctype html>
    <html>
      <head>
        <title>Kunvet V3</title>
      </head>
      <body>
        <h1>Kunvet Server</h1>
        <p>
          Running in development mode. Useful tools:
          <ul>
            <li><a href="/graphiql">Graph<em>i</em>QL</a></li>
          </ul>
        </p>
      </body>
    </html>
  `;
});

// Interactive GraphiQL interface
router.get('/graphiql', graphiqlKoa({
  endpointURL: '/srv/graphql',
}));

// Mailer test
router.get('/test-mailer', (ctx) => {
  const mailer = new Mailer();
  mailer.sendTemplate(
    'Zhaofeng Li <hello@zhaofeng.li>',
    'welcome',
    {
      firstname: 'Zhaofeng',
      lastname: 'Li',
    },
  );
  ctx.body = 'Check your mailbox!';
});

// Login form
// FIXME: Debug purposes only - Please remove me
router.get('/loginform', (ctx) => {
  const loginStatus = ctx.isAuthenticated() ? 'logged in' : 'not logged in';
  ctx.body = `
<!doctype html>
<html>
  <head>
    <title>Log in</title>
  </head>
  <body>
    <pre>
Login Interface

You find yourself staring at a sketchy login interface. It's
totally unstyled, complete with misspelt labels and a plaintext password field.

You say to yourself, "Eww! I probably shouldn't type in a valuable password.
Also, whoever spent time writing this should be fired."
    </pre>
    <p>You are ${loginStatus}. <a href='/auth/logout'>Log out?</a></p>
    <form action='/auth/login' method='post'>
      <input name='email' placeholder='Usename'>
      <input name='password' placeholder='Pass word'>
      <button type='submit'>Log in</button>
    </form>
  </body>
</html>
  `;
});

router.post('/uploadfile', upload.single('file'), async (ctx) => {
  const { file } = ctx.req;
  // Do stuff with the file here
  // create new fileobject
  // if successful: return id to store in client
  ctx.body = file.filename;
  ctx.status = 200;
});

router.post('/removefile', (ctx) => {
  const filename = ctx.request.body.filename;
  if (filename) {
    fs.unlinkSync(`server/uploads/${filename}`);
    ctx.status = 200;
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
