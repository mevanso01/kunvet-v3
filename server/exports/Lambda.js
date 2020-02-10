import AwsServerlessExpress from 'aws-serverless-express';
import Scheduler from '@/Scheduler';
import Logger from '@/Logger';

/*
// https://github.com/winstonjs/winston/issues/1250
async function waitForLogger() {
  const done = new Promise(resolve => Logger.on('finish', resolve));
  return done;
}
*/

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
      const response = await AwsServerlessExpress.proxy(server, event, {}, 'PROMISE').promise;
      /*
      try {
        await waitForLogger();
      } catch (e) {
        console.error(e);
      }
      */
      return response;
    };
  }
}
