module.exports = {
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
  // Get yours from https://ethereal.email/create
  mailTransport: {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: '',
      pass: '',
    },
  },

  // Sentry
  sentryDsn: '',

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
