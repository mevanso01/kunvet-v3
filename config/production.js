/*
 * Production configurations
 *
 * To supply credentials, copy credentials.example.js
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
  daysToExpire: 30,
  daysToDeleteFromAlgolia: 180, // remove from algolia after expiration for > 90 days
  serverUrl: Credentials.serverUrl,
  googleMapsKey: Credentials.googleMapsKey,
  sentry: {
    dsn: Credentials.sentryClientDsn,
  },
  analytics: {
    //googleAnalytics: true,
    googleTagManager: true,
    //googleAdSense: true,
    hotjar: true,
  },
  algolia: {
    appId: Credentials.algolia.appId,
    searchApiKey: Credentials.algolia.searchApiKey,
  },
  braintree: {
    sandbox: Credentials.braintree.sandbox,
    publicKey: Credentials.braintree.publicKey,
    merchantId: Credentials.braintree.merchantId,
  },
  mailchimp: {
    mcListId: Credentials.braintree.sandbox,
    mcAPIKey: Credentials.aws,
  },
  private: {
    FIXCONFIG: '!!!This is not supposed to appear in client!!!',

    database: Credentials.database,
    aws: Credentials.aws,
    cors: {
      allowedOrigins: [
        'https://kunvet.com',
        'https://dev.kunvet.com',
      ],
    },
    sentry: {
      dsn: Credentials.sentryServerDsn,
    },
    files: {
      defaultStorage: 's3',
      s3: {
        bucket: 'kunvet-dev-uploads',
      },
      // image/* is hardcoded to be allowed
      allowedMimeTypes: [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.oasis.opendocument.text',
      ],
    },
    mail: {
      from: 'Kunvet Notifications <notifications@kunvet.com>',
      transport: Credentials.mailTransport,
    },
    algolia: {
      adminApiKey: Credentials.algolia.adminApiKey,
    },
    braintree: {
      privateKey: Credentials.braintree.privateKey,
    },
  },
};
