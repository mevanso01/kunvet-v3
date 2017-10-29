// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import KCors from 'kcors';

// GraphiQL
import { graphiqlKoa } from 'apollo-server-koa';

import Models from '../mongodb/Models';

const nodemailer = require('nodemailer');
const bodyParser = require('koa-bodyparser');
const sha1 = require('sha1');

const app = new Koa();
const router = new KoaRouter();

// const TAS = Models.TempAccount;

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

router.post('/sendemail', (ctx) => {
  ctx.body = 'hello!';
  const emailaddress = (ctx.request.body.email);
  const reqType = (ctx.request.body.reqtype);
  console.log(reqType);
  if (reqType === 'validate') {
    console.log('test');
    const randomString = `abc, ${Math.floor(Math.random() * 500)}, ${Math.floor(Math.random() * 500)}`;
    const validationCode = sha1(randomString);
    // emailsToValidate.push([emailaddress, validationCode]);

    const emailbody = `<p>Please click this link to validate your email: <a href="localhost:8080/validate/${validationCode}">localhost:8080/validate/${validationCode}</a></p>`;
    activateNodemailer(emailaddress, emailbody);
    const TAS = Models.TempAccount;
    const x = new TAS({
      email: emailaddress,
      password: 'test1234',
      vcode: validationCode,
    });
    x.save();
    console.log(x.username);
  }
});

/* router.post('/validatecode', (ctx) => {
   const code = (ctx.request.body.code);
  for (let i = 0; i < emailsToValidate.length; i += 1) {
    if (emailsToValidate[i][1] === code) {
      console.log(emailsToValidate[i]);
    }
  }
}); */


app.use(router.routes());
app.use(router.allowedMethods());

export default app;
