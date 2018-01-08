import Config from 'config';
import Nodemailer from 'nodemailer';
import Email from 'email-templates';

export default class Mailer {
  constructor() {
    this.transport = Nodemailer.createTransport(Config.mailTransport);
  }
  sendTemplate(recipient, template, locals) {
    const email = new Email({
      message: {
        from: Config.mailFrom,
      },
      views: {
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
