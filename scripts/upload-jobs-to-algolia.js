// Bootstrap Algolia index
// This should only be done once.

import AlgoliaSearch from 'algoliasearch';
import Models from '../server/mongodb/Models';
import Mongoose from 'mongoose';

if (process.argv.length < 4) {
  console.log(`Usage: ${process.argv.slice(0, 2).join(' ')} <MongoDB connection string> <Algolia AppID> <Algolia Admin Key>`);
  process.exit(1);
}

const mongodb = process.argv[2];
const appId = process.argv[3];
const apiKey = process.argv[4];

Mongoose.connect(mongodb).then(() => {
  console.log('Connected to MongoDB. Fetching jobs...');
  Models.Job.find().exec().then((jobs) => {
    const selected = jobs.filter(o => o.active).map((o) => {
      // Flatten the job object (Mongoose getters and setters are freaking weird)
      const job = JSON.parse(JSON.stringify(o));

      job.objectID = job._id;
      if (job.latitude) {
        job._geoloc = {
          lat: job.latitude,
          lng: job.longitude,
        };
      }
      return job;
    });
    console.log(`Uploading ${selected.length} jobs...`);

    const client = AlgoliaSearch(appId, apiKey);
    const index = client.initIndex('jobs');
    index.addObjects(selected).then(() => {
      console.log('Done!');
      process.exit(0);
    });
  });
});
