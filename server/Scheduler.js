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

const daysToExpire = 30;
const daysToDeleteFromAlgolia = 90;

const oneDay = 24 * 60 * 60 * 1000;

const tasks = [
  () => { // filter all expired jobs and update attribute
    Models.Job.find({}, (err, jobsFound) => {
      const today = new Date();
      const expiredJobIds = [];
      const toDeleteJobIds = [];

      jobsFound.forEach((job) => {
        const expiredDate = new Date(Date.parse(job.date) + (daysToExpire * oneDay));
        if (!job.expired && today.getTime() > expiredDate.getTime()) {
          expiredJobIds.push(job._id);
        }
        const toBeDeletedTime = new Date(Date.parse(job.date) + (daysToDeleteFromAlgolia * oneDay));
        if (today.getTime() > toBeDeletedTime.getTime()) {
          toDeleteJobIds.push(job._id)
        }
      });
      for (let i = 0; i < expiredJobIds.length; ++i) {
        Models.Job.findOneAndUpdate(
          { '_id': expiredJobs[i] },
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
