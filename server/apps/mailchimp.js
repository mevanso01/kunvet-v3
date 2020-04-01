/* eslint-disable */
// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';

// After setting up the API Keys in Config/credentials, uncomment these lines.

import Config from 'config';

const mcListId = Config.get('mailchimp.mcListId');
const mcEmployerListId = Config.get('mailchimp.mcEmployerListId');
const mcBlogListId = Config.get('mailchimp.mcBlogListId');
const mc = Config.get('mailchimp');

// const mcAPIKey = Config.get('mailchimp.mcAPIKey');

const bodyParser = require('koa-bodyparser');

const md5 = require('js-md5');

const app = new Koa();
const router = new KoaRouter();
const Mailchimp = require('mailchimp-api-v3');

app.use(bodyParser());

// below is Bill's testing ListID
// const mcListId = 'a96ea02853';
// below is Bill's current ListID
//const mcListId = 'a2730eab51';
// below is Jenny's testing ListID
// const mcListId = '82b364d072';
// below is temporary ListID to add users to MailChimp
// const mcListId = '46e582ba53';
// Below is Bill's Mailchimp API Key
//const mcAPIKey = 'c5be2bf312c2d1f9c59a0af7edf4dc19-us18';
// Below is Jenny's Mailchimp API Key
// const mcAPIKey = '93cdf81520d8a2d25b60a78ad0dbcdda-us3';
const mcAPIKey = Config.get('mailchimp.mcAPIKey');
const mailchimp = new Mailchimp(mcAPIKey);

router.post('/addMember', async (ctx) => {
  ctx.body = JSON.stringify({
    success: false,
    message: 'Failed posting on MailChimp',
  });
  const info = ctx.request.body;
  let listId = info.type === 'student' ? mcBlogListId : mcEmployerListId;
  if (info.type === 'blog') {
    listId = mcBlogListId;
  }
  console.log(info);
  console.log(listId);
  try {
    const m = await mailchimp.post(`lists/${listId}`, {
      members: [{
        email_address: info.email_address,
        status: 'subscribed',
        merge_fields: {
          'FNAME': info.fname,
        },
        tags: info.tags,
      }],
    });
    if (m.errors && m.errors.length > 0) {
      console.log('Error adding new subscriber to MC', m.errors);
      if (m.statusCode == 200){
        const mm = await mailchimp.post(`lists/${listId}`, {
          members: [{
            email_address: info.email_address,
            status: 'subscribed',
            merge_fields: {
              'FNAME': info.fname,
            },
            tags: info.tags,
          }],
          update_existing: true,
        });
        if (mm.errors && mm.errors.length > 0) {
          console.log('Error adding new subscriber to MC', mm.errors);
        }
      }
    }
  } catch (err) {
    console.warn('Failed adding subscriber', ctx.request.body.email_address, err);
    return;
  }
  console.log('done');
  ctx.body = JSON.stringify({
    success: true,
    message: 'Posted on MailChimp',
  });
});

router.post('/deleteTags', async (ctx) => {
  ctx.body = JSON.stringify({
    success: false,
    message: 'Failed posting on MailChimp',
  });
  const info = ctx.request.body;
  mailchimp.get(`lists/${mcListId}/members/${md5(info.email)}/tags`, {
    count: 250,
  }).then(m => {
    if (m.errors) {
      console.log('Error adding new subscriber to MC', m.errors);
    }
    console.log(m);
    console.log(m.total_items);
    for (var i = 0; i < m.total_items; i++) {
      // /lists/{list_id}/segments/{segment_id}/members/{subscriber_hash}
      console.log(m.tags[i].id);
      console.log(m.tags[i].name);
      if (m.tags[i].name === 'no preference') {
        mailchimp.delete(`lists/${mcListId}/segments/${m.tags[i].id}/members/${md5(info.email)}`).then(mes => {
          if (mes.errors) {
            console.log('Error Deleting Tags', mes.errors);
          }
        }).catch(err => {
          console.warn('Failed reading from mailchimp', err);
        }).then(() => {
          console.log('no preference successfully deleted.');
        });
      }
    }
    return m;
  }).catch(err => {
    console.warn('Failed reading from mailchimp', err);
  });
  console.log('done deleting');
  ctx.body = JSON.stringify({
    success: true,
    message: 'Posted on MailChimp',
  });
});

router.post('/updatePreference', async (ctx) => {
  console.log("inside updatePreference");
  ctx.body = JSON.stringify({
    success: false,
    message: 'Failed updating preference on MailChimp',
  });
  const info = ctx.request.body;
  console.log(info);
  mailchimp.patch(`lists/${mcListId}/members/${md5(info.email_address)}`, {
    "status": info.status
  }).then(m => {
    if (m.errors) {
      console.log('Error adding updating subscriber preference to MC', m.errors);
    }
    console.log(m);
    return m;
  }).catch(err => {
    console.warn('Failed posting on mailchimp', err);
  });
  console.log('done updating');
  ctx.body = JSON.stringify({
    success: true,
    message: 'updated on MailChimp',
  });
});

router.post('/addTags', async (ctx) => {
  ctx.body = JSON.stringify({
    success: false,
    message: 'Failed posting on MailChimp',
  });
  const info = ctx.request.body;
  const templist = info.tags;
  console.log('templist');
  console.log(templist);
  var segments;
  mailchimp.get(`lists/${mcListId}/segments`, {
    count: 250,
  }).then(m => {
    if (m.errors && m.errors.length > 0) {
      console.log('Error adding new subscriber to MC', m.errors);
    }
    segments = m.segments;
    console.log(m.total_items);
    for (var i = 0; i < m.total_items; i++) {
      for (var j = 0; j < templist.length; j++) {
        if (templist[j] === segments[i].name) {
          console.log(`the Tags that needs to be added: ${segments[i].name}`);
          mailchimp.post(`lists/${mcListId}/segments/${segments[i].id}/members`, {
            'email_address': info.email,
          }).then(mes => {
            if (mes.errors) {
              console.log('Error adding the Tags', mes.errors);
            } else {
              console.log('Successfully added', segments[i]);
            }
          }).catch(err => {
            console.warn('Failed reading from mailchimp', err);
          });
        }
      }
    }
  }).catch(err => {
    console.warn('Failed adding subscriber', ctx.request.body.email_address, err);
  });

  console.log('done');
  ctx.body = JSON.stringify({
    success: true,
    message: 'Posted on MailChimp',
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
