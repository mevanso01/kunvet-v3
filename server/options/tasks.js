import Logger from 'winston';
import Scheduler from '@/Scheduler';
import Config from 'config';
import Models from '@/mongodb/Models';
// Test task
Scheduler.schedule(() => {
  Logger.debug('The scheduler works!');
});

Scheduler.schedule(() => { // filter all expired jobs and update attribute
  console.log('hello');
  console.log(Config.get('jobExpirationPeriod'));
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
});

Scheduler.install();
