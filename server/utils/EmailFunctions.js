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

/*
This is what the emailBody should look like.
const emailBody = {
    replyTo: employer.email,
    fname: user.firstname,
    name: application.name,
    jobname: job.title,
  };

This helper function ensures that the right arguments are passed in.
*/

function checkEmailBody(emailBody) {
  if (!emailBody.replyTo) console.warn('Missing replyTo property in emailBody');
  if (!emailBody.fname) console.warn('Missing fname property in emailBody');
  if (!emailBody.name) console.warn('Missing name property in emailBody');
  if (!emailBody.jobName) console.warn('Missing jobName property in emailBody');
}

export default {
  /*
  This functions takes a user and an emailBody. The email body contains data
  about the users name, the job title, the application name, and the employer email.
  The emailBody looks like this.
  const emailBody = {
    replyTo: employer.email,
    fname: user.firstname,
    name: application.name,
    jobname: job.title,
  };
  */
  async sendApplicationStatus(user, emailBody) {
    checkEmailBody(emailBody); // verifies that the emailBody is sending all values
    try {
      const mailer = new Mailer();
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
  /*
  This function takes a templateObject and sends the email template.
  locals is an object containing the details of the user which looks like this.
  const locals = {
    replyTo: user.email,
    name: `${user.firstname} ${user.lastname}`,
    fname: user.firstname,
    jobname: job.title,
    employername: employer.firstname,
    email: user.email,
    degree: degree,
    school: req.args.record.school,
    message: req.args.record.applicant_message,
    trackingToken: req.args.record.tracking_token,
    appId: results.record._id,
    attachments: [
    ],
  };
  */
  sendApplicantInfo: async function (templateObject) {
    checkTemplateObject(templateObject); // verifies that the templateObject is sending all values
    try {
      const mailer = new Mailer();
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
