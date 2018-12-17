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
  googleMapsKey: 'AIzaSyAFF15NpEK9amIidp280tcnj0vWsK1PWF4',

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
      user: 'ooufshpyxgxyybfu@ethereal.email',
      pass: 's4jgjHBCXJzWHDHCTc',
    },
  },

  // Sentry
  sentryClientDsn: '',
  sentryServerDsn: '',

  // Please read on

};
