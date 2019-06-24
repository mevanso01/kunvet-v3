import AwsServerlessExpress from 'aws-serverless-express';
import Scheduler from '@/Scheduler';
import Logger from 'winston';

export default class Lambda {
  static get(app) {
    const server = AwsServerlessExpress.createServer(app.callback());
    return async (event) => {
      if (event.scheduler) {
        // Scheduler trigger
        Logger.info('Running scheduled tasks');
        await Scheduler.trigger();
        return {
          success: true,
        };
      }
      return AwsServerlessExpress.proxy(server, event, {}, 'PROMISE').promise;
    };
  }
}
