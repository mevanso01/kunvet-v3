const { google } = require('googleapis');
const key = require('../service_account.json');

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/indexing'],
  null,
);
const googleAuth = {};

export default {
  initTokens() {
    jwtClient.authorize((err, tokens) => {
      if (err) {
        console.log(err);
        return;
      }
      googleAuth.tokens = tokens;
      // const options = {
      //   url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
      //   method: 'POST',
      //   // Your options, which must include the Content-Type and auth headers
      //   headers: {
      //       'Content-Type': 'application/json',
      //   },
      //   auth: { 'bearer': tokens.access_token },
      //   // Define contents here. The structure of the content is described in the next step.
      //   json: {
      //       'url': 'http://example.com/jobs/42',
      //       'type': 'URL_UPDATED',
      //   },
      // };
    });
  },
};
