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
  getEmailInstance() {
    return new Email({
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
  }
  sendTemplate(recipient, template, locals) {
    const email = this.getEmailInstance();
    const config = {
      message: {
        to: recipient,
        headers: {},
      },
      template,
      locals,
    };
    if (locals.replyTo) {
      config.message.headers['Reply-To'] = locals.replyTo;
    }
    if (locals.attachments) {
      config.message.attachments = locals.attachments;
    }
    return email.send(config);
  }
  async render(template, locals) {
    const email = this.getEmailInstance();
    return email.render(template, locals);
  }
}
export { Handlebars };
