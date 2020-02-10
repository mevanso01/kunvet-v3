import AlgoliaSearch from 'algoliasearch';
import Mongoose from 'mongoose';
import Config from 'config';
import Models from '@/mongodb/Models';

export default {
  async uploadJob(job) {
    let jobRecord = {};

    if (typeof job === 'string') {
      // Job ID
      const jobm = await Models.Job.findOne({
        _id: job,
      });

      if (!jobm) {
        throw Error('Non-existent job');
      }

      jobRecord = jobm.toObject();
    } else if (job instanceof Mongoose.Model) {
      // Mongoose Model
      jobRecord = job.toObject();
    } else if (typeof job === 'object') {
      // Plain object
      jobRecord = Object.assign({}, job);
    } else {
      throw Error('Invalid job reference type');
    }

    const appId = Config.get('algolia.appId');
    const client = AlgoliaSearch(appId, Config.get('private.algolia.adminApiKey'));
    const index = client.initIndex('jobs');

    jobRecord.objectID = jobRecord._id;
    jobRecord.date = Date.parse(jobRecord.date) / 1000;

    if (jobRecord.latitude) {
      jobRecord._geoloc = {
        lat: jobRecord.latitude,
        lng: jobRecord.longitude,
      };
    }

    await index.addObjects([jobRecord]);
  },
};
