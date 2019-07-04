import Logger from '@/Logger';
import Scheduler from '@/Scheduler';
import Config from 'config';
import Models from '@/mongodb/Models';
import AlgoliaSearch from 'algoliasearch';

// Test task
Scheduler.schedule(() => {
  Logger.debug('The scheduler works!');
});

const daysToExpireFallback = 60;
const daysToDeleteFromAlgoliaFallback = 90;

const oneDay = 24 * 60 * 60 * 1000;

Scheduler.schedule(() => { // filter all expired jobs and update attribute
  console.log('Scheduling expired job removal');
  console.log('Expire time is', Config.get('daysToExpire'));
  console.log('Delete from algolia time is', Config.get('daysToDeleteFromAlgolia'));
  Models.Job.find({}, (err, jobsFound) => {
    const today = new Date();
    const expiredJobIds = [];
    const toDeleteJobIds = [];
    const daysToExpire = Config.get('daysToExpire') || daysToExpireFallback;
    const daysToDeleteFromAlgolia = Config.get('daysToDeleteFromAlgolia') || daysToDeleteFromAlgoliaFallback;

    jobsFound.forEach((job) => {
      const expiredDate = new Date(Date.parse(job.date) + (daysToExpire * oneDay));
      if (!job.expired && today.getTime() > expiredDate.getTime()) {
        expiredJobIds.push(job._id);
      }
      const toBeDeletedTime = new Date(Date.parse(job.date) + (daysToDeleteFromAlgolia * oneDay));
      if (today.getTime() > toBeDeletedTime.getTime()) {
        toDeleteJobIds.push(job._id);
      }
    });
    for (let i = 0; i < expiredJobIds.length; ++i) {
      Models.Job.findOneAndUpdate(
        { '_id': expiredJobIds[i] },
        { $set: { 'expired': true } },
        { new: true },
        (err1, docs1) => {
          console.log(docs1);
        },
      );
    }
    const appId = Config.get('algolia.appId');
    const apiKey = Config.get('private.algolia.adminApiKey');
    if (toDeleteJobIds.length > 0 && appId && apiKey) {
      const client = AlgoliaSearch(appId, apiKey);
      const index = client.initIndex('jobs');
      for (let i = 0; i < toDeleteJobIds.length; ++i) {
        const id = toDeleteJobIds[i];
        // Delete from algolia
        index.deleteObjects([id]);
        Logger.info(`Automatically deleting ${id} from Algolia`);
      }
    }
  });
});

Scheduler.install();
