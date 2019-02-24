import ErrorCode from '#/ErrorCode';
import ApiResponse from '@/utils/ApiResponse';
import Mailer from '@/utils/Mailer';
import Logger from 'winston';

/*
This is what the templateObject should look like.
const templateObject = {
    email: employer.email,
    status: 'application-created',
    locals: locals,
  };

This helper function ensures that the right arguments are passed in.
*/

function checkTemplateObject(templateObject) {
  if (!templateObject.email) console.warn('Missing email in templateObject.');
  if (!templateObject.status) console.warn('Missing status in templateObject.');
  if (!templateObject.locals) console.warn('Missing locals in templateObject.');
}

function checkEmailBody(emailBody) {
  if (!emailBody.replyTo) console.warn('Missing replyTo property in emailBody');
  if (!emailBody.fname) console.warn('Missing fname property in emailBody');
  if (!emailBody.name) console.warn('Missing name property in emailBody');
  if (!emailBody.jobName) console.warn('Missing jobName property in emailBody');
}

export default {
  async sendApplicationStatus(user, emailBody) {
    checkEmailBody(emailBody); // verifies that the emailBody is sending all values
    const mailer = new Mailer();
    try {
      await mailer.sendTemplate(
        user.email,
        `application-${status}`,
        { replyTo: emailBody.replyTo,
          fname: emailBody.fname,
          name: emailBody.name,
          jobname: emailBody.jobName },
      );
    } catch (e) {
      Logger.error(e);
      return ApiResponse(ErrorCode.InternalError);
    }
    return ApiResponse();
  },
  async sendApplicantInfo(mailer, templateObject) {
    checkTemplateObject(templateObject); // verifies that the templateObject is sending all values
    try {
      await mailer.sendTemplate(
        templateObject.email,
        templateObject.status,
        templateObject.locals,
      );
    } catch (e) {
      Logger.error(e);
      // throw Error('Employer could not be emailed');
    }
  },
};
