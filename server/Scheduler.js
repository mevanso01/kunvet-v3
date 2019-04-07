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
import Models from '@/mongodb/Models';

const tasks = [
  () => { // filter all expired jobs and update attribute
    Models.Job
      .find({}, (err, docs) => {
        const toExpire = docs // all jobs whose expiration date have passed
          .filter(job => {
            const expiration = job.expiry_date;
            const today = new Date();
            return today.getTime() > expiration.getTime();
          })
          .map(job => job._id); // extract id from job object
        console.log(toExpire);
        for (let i = 0; i < toExpire.length; ++i) {
          Models.Job.findOneAndUpdate(
            { '_id': toExpire[i]._id },
            { $set: { 'expired': true } },
            { new: true },
            (err1, docs1) => {
              console.log(docs1);
            },
          );
        }
      });
  },
];

export default class Scheduler {
  static install() {
    if (process.env.TARGET === 'normal') {
      // eslint-disable-next-line global-require
      // const NodeSchedule = require('node-schedule');

      let schedule = '* * 1 * * *';
      if (Config.has('private.scheduler.schedule')) {
        schedule = Config.get('private.scheduler.schedule');
      }
      // NodeSchedule.scheduleJob(schedule, this.trigger);
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
