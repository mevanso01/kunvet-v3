import ErrorCode from '#/ErrorCode';
import ApiResponse from '@/utils/ApiResponse';
import Mailer from '@/utils/Mailer';
import Logger from 'winston';


export default {
  async sendApplicationStatus(user, emailBody) {
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
