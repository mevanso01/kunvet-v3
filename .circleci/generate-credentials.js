const fs = require('fs');

let credentials = process.env.CREDENTIALS_FILE;
const branch = process.env.CIRCLE_BRANCH;

if (!credentials || !branch) {
  console.log('No CREDENTIALS_FILE or CIRCLE_BRANCH');
  console.log('This build will be broken.');
  fs.writeFileSync('config/credentials.js', '/* CI */ module.exports = {};');
} else {
  const serverUrlMap = {
    master: 'https://ds.kunvet.com',
    prod: 'https://s.kunvet.com',
  };
  const serverUrl = serverUrlMap[branch] || 'https://broken.build.tld';
  credentials = credentials.replace('%SERVERURL%', serverUrl);
  fs.writeFileSync('config/credentials.js', credentials);
}
