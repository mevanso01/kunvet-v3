/*
 * Scheduler
 *
 * All methods are static.
 *
 * For the 'normal' target, install() uses node-scheduler
 * to call trigger() periodically.
 *
 * For all other targets, install() has no effect, and
 * tasks can only be triggered with the trigger() method.
 * node-scheduler is not included in the final bundle.
 */
import Config from 'config';
import Logger from 'winston';

const tasks = [];

export default class Scheduler {
  static install() {
    if (process.env.TARGET === 'normal') {
      // eslint-disable-next-line global-require
      const NodeSchedule = require('node-schedule');

      let schedule = '45 * * * * *';
      if (Config.has('private.scheduler.schedule')) {
        schedule = Config.get('private.scheduler.schedule');
      }
      NodeSchedule.scheduleJob(schedule, this.trigger);
      Logger.debug(`Using node-scheduler (${schedule})`);
    }
  }

  static async trigger() {
    Logger.debug('Running scheduled tasks');

    for (const task of tasks) {
      await task();
    }
  }

  static schedule(task) {
    tasks.push(task);
  }
}
