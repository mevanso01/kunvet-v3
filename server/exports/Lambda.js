import AwsServerlessExpress from 'aws-serverless-express';
import Scheduler from '@/Scheduler';
import Logger from 'winston';

export default class Lambda {
  static get(app) {
    const server = AwsServerlessExpress.createServer(app.callback());
    return (event, context) => {
      if (event.scheduler) {
        // Scheduler trigger
        Logger.info('Running scheduled tasks');
        Scheduler.trigger().then(() => {
          context.succeed({
            success: true,
          });
        }).catch((e) => {
          context.fail(e);
        });
      } else {
        // Web request
        AwsServerlessExpress.proxy(server, event, context);
      }
    };
  }
}
