import Config from 'config';
import Nodemailer from 'nodemailer';
import Email from 'email-templates';
import path from 'path';


export default class Mailer {
  constructor() {
    this.transport = Nodemailer.createTransport(Config.mailTransport);
  }
  sendTemplate(recipient, template, locals) {
    console.log(recipient);
    const email = new Email({
      message: {
        from: Config.mailFrom,
      },
      views: {
        root: path.resolve('email-templates'),
        options: {
          extension: 'handlebars',
        },
      },
      htmlToText: false,
      transport: this.transport,
      send: true,
    });
    return email.send({
      message: {
        to: recipient,
      },
      template,
      locals,
    });
  }
}
