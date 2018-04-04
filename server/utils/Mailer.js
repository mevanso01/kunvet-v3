import Config from 'config';
import Nodemailer from 'nodemailer';
import Email from 'email-templates';
import path from 'path';


export default class Mailer {
  constructor() {
    this.transport = Nodemailer.createTransport(Config.get('private.mail.transport'));
  }
  sendTemplate(recipient, template, locals) {
    const email = new Email({
      message: {
        from: Config.get('private.mail.from'),
        jsonTransport: true,
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
