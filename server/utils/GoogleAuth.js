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
  doAuth() {
    jwtClient.authorize((err, tokens) => {
      if (err) {
        console.log(err);
        return;
      }
      googleAuth.tokens = tokens;
    });
  },
  getAccessToken() {
    return googleAuth.tokens ? googleAuth.tokens.access_token : '';
  },
  getAuthRequestHeaders() {
    return jwtClient.getRequestHeaders('https://indexing.googleapis.com/v3/urlNotifications:publish');
  },
};
