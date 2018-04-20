import Config from 'config';
import Handlebars from 'handlebars';
import Nodemailer from 'nodemailer';
import Email from 'email-templates';
import path from 'path';

import Consolidate from 'consolidate';
import MasterTemplate from '../../email-templates/master.handlebars';

Handlebars.registerPartial('master', MasterTemplate);
Consolidate.requires.handlebars = Handlebars;

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
      htmlToText: true,
      transport: this.transport,
      send: true,
      juice: true,
      juiceResources: {
        preserveImportant: true,
        webResources: {
          relativeTo: path.resolve('email-templates'),
          images: 16, // 16KB max
        },
      },
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
export { Handlebars };
