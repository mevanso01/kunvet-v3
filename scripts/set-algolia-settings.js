import AlgoliaSearch from 'algoliasearch';

if (process.argv.length < 4) {
  console.log(`Usage: ${process.argv.slice(0, 2).join(' ')} <Algolia AppID> <Algolia Admin Key> <Settings>`);
  process.exit(1);
}

const appId = process.argv[2];
const apiKey = process.argv[3];
const settings = JSON.parse(process.argv[4]);

const client = AlgoliaSearch(appId, apiKey);
const index = client.initIndex('jobs');
index.setSettings(settings, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('OK');
});
