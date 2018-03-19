/*
 * Production configurations
 *
 * To supply credentials, copy credentials.js.example
 * to credentials.js
 */

const fs = require('fs');
const path = require('path');
const colors = require('colors/safe');

const credPath = path.resolve(__dirname, './credentials.js');
if (!fs.existsSync(credPath)) {
  console.error(colors.red.bold(`
***** 🤔 *****
** Hmm. Looks like you haven't supplied your credentials yet.
** 
** Run \`yarn reset-credentials\` and edit config/credentials.js
** to continue.
** 
** -- Your friend, the Hmm Face
*************
`));
  process.exit(1);
}

const Credentials = require('./credentials.js');

if (Credentials.REMOVEMEPLS) {
  console.error(colors.red.bold(`
***** 🤔 *****
** Hmm. You have credentials.js, but something is amiss.
** 
** Please read through the entire file, and actually fill in
** your credentials.
** 
** -- Your friend, the Hmm Face
*************
`));
  process.exit(1);
}

module.exports = {
  serverUrl: 'https://kunvet.com',
  googleMapsKey: Credentials.googleMapsKey,
  private: {
    FIXCONFIG: '!!!This is not supposed to appear in client!!!',

    database: Credentials.database,
    aws: Credentials.aws,
    files: {
      defaultStorage: 's3',
      s3: {
        bucket: 'kunvet-prod',
      },
    },
    mail: {
      mailFrom: 'Kunvet Notifications <notifications@kunvet.com>',
      mailTransport: Credentials.mailTransport,
    },
  },
};
