// Depends on Webpack module resolution
// FIXME: Remove temporary dev API keys, and use credentials.js

import AlgoliaSearch from 'algoliasearch';
import Models from '@/mongodb/Models';

const client = AlgoliaSearch('0EXR93R20L', 'f2b308e2f23de66614cacd60f8f93b67');
const index = client.initIndex('jobs');

async function uploadData() {
  let jobs = await Models.Job.find().exec();
  jobs = jobs.map((e) => {
    if (e.latitude) {
      e._geoloc = {
        lat: e.latitude,
        lng: e.longitude,
      };
    }
    return e;
  });
  index.addObjects(jobs);
}

uploadData();
