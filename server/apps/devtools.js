// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import KCors from 'kcors';

// Utils
import Mailer from '@/utils/Mailer';
import Models from '@/mongodb/Models';

// GraphiQL
import { graphiqlKoa } from 'apollo-server-koa';


const nodemailer = require('nodemailer');
const bodyParser = require('koa-bodyparser');
const sha1 = require('sha1');
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

app.use(KCors());
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

function activateNodemailer(emailaddress, emailbody) {
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: account.user, // generated ethereal user
        pass: account.pass, // generated ethereal password
      },
    });
    const mailOptions = {
      from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
      to: emailaddress, // list of receivers
      subject: 'Hello ✔', // Subject line
      // text: validationCode, // plain text body
      html: emailbody, // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      // for testing
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      return 'success';
    });
  });
}

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

router.post('/sendemail', (ctx) => {
  ctx.body = 'hello!';
  const req = ctx.request.body;
  console.log(req);
  if (req.reqtype === 'validate') {
    console.log('test');
    const randomString = `abc, ${Math.floor(Math.random() * 500)}, ${Math.floor(Math.random() * 500)}`;
    const validationCode = sha1(randomString);

    const TAS = Models.TempAccount;
    const x = new TAS({
      email: req.email,
      vcode: validationCode,
      /* firstname: ctx.request.body.fname,
      lastname: ctx.request.body.lname,
      business_name: ctx.request.body.bname, */
    });
    x.save();

    Models.Account.register(
      {
        email: req.email,
        firstname: req.fname,
        lastname: req.lname,
        default_org: req.default_org,
      },
      req.pwd,
      (err, user) => {
        if (!err) {
          console.log(user);
        } else {
          console.error(err);
        }
      },
    );
    const emailbody = `<p>Please click this link to validate your email: <a href="localhost:8080/validate/${validationCode}">localhost:8080/validate/${validationCode}</a></p>`;
    activateNodemailer(req.email, emailbody);
  }
});

router.post('/uploadfile', upload.single('file'), async (ctx) => {
  const { file } = ctx.req;
  // Do stuff with the file here
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
/* router.post('/uploadfile', (ctx) => {
  fs.writeFile('uploads/testfilename.pdf', ctx.request.body.file, 'utf8', (error) => {
    if (error) {
      console.log('error', error);
    } else {
      console.log('success');
    }
  });
  ctx.body = 'hello';
  console.log(ctx.request.body);
}); */


app.use(router.routes());
app.use(router.allowedMethods());

export default app;
