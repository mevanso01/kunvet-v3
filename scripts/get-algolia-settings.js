import AlgoliaSearch from 'algoliasearch';

if (process.argv.length < 4) {
  console.log(`Usage: ${process.argv.slice(0, 2).join(' ')} <Algolia AppID> <Algolia Admin Key>`);
  process.exit(1);
}

const appId = process.argv[2];
const apiKey = process.argv[3];

const client = AlgoliaSearch(appId, apiKey);
const index = client.initIndex('jobs');
index.getSettings((err, settings) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(JSON.stringify(settings));
});
