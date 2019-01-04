const fs = require('fs');

const prodCredentials = process.env.PROD_CREDENTIALS_FILE;
const devCredentials = process.env.DEV_CREDENTIALS_FILE;
const branch = process.env.CIRCLE_BRANCH;

if (!prodCredentials || !devCredentials || !branch) {
  console.log('No credential environment variables');
  console.log('This build will be broken.');
  fs.writeFileSync('config/credentials.js', '/* CI */ module.exports = {};');
} else {
  credentials = branch === 'prod' ? prodCredentials : devCredentials;
  fs.writeFileSync('config/credentials.js', credentials);
}
