module.exports = {
  // API endpoint
  // Only required if you are working with
  // production.
  serverUrl: '',

  // MongoDB database URI
  //
  // Only required if you are working with
  // production.
  database: '',

  // Google Maps JavaScript API key
  //
  // Get yours from
  // https://developers.google.com/maps/documentation/javascript/get-api-key
  googleMapsKey: '',

  // AWS
  //
  // Fill in the access key of your AWS IAM account.
  // This account should be able to put, get, delete
  // objects in the configured bucket.
  //
  // Only required if you are using the S3 storage
  // backend.
  aws: {
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-west-1',
  },

  // Mail transport
  //
  // You don't need this for development. For NODE_ENV=development, email
  // previews will automatically show up in your browser, and the transport
  // configurations below will be unused.
  //
  // If you're developing remotely, use a fake SMTP server like
  // https://ethereal.email/create
  mailTransport: {
    alwaysSend: false, // Actually send emails in NODE_ENV=development
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: '',
      pass: '',
    },
  },

  // Algolia
  // Set appId to false to disable the new search UI
  algolia: {
    appId: false,
    searchApiKey: '',
    adminApiKey: '',
  },

  // Braintree
  // Get your Sandbox keys at https://www.braintreepayments.com/sandbox
  braintree: {
    sandbox: false,
    merchantId: '',
    privateKey: '',
    publicKey: '',
  },

  // Sentry
  sentryClientDsn: '',
  sentryServerDsn: '',

  // Please read on
  REMOVEMEPLS: `

*****
** You did it!
**
** To show that you are paying attention and have filled in
** all the blanks, remove this key.
*****

`,
};
