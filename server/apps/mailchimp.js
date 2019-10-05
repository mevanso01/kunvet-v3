/* eslint-disable */
// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
// import BraintreeGateway from '@/BraintreeGateway';
// import Mailer from '@/utils/Mailer';
// import Algolia from '@/utils/Algolia';
// import ErrorCode from '#/ErrorCode';
// import ApiResponse from '@/utils/ApiResponse';
// import DateHelper from '@/../client/utils/DateHelper';
// import util from 'util';

const bodyParser = require('koa-bodyparser');

const md5 = require('js-md5');

const app = new Koa();
const router = new KoaRouter();
const Mailchimp = require('mailchimp-api-v3');

app.use(bodyParser());

const mcListId = '82b364d072';
// My Mailchimp API Key
const mailchimp = new Mailchimp('93cdf81520d8a2d25b60a78ad0dbcdda-us3');


router.post('/addMember', async (ctx) => {
  ctx.body = JSON.stringify({
    success: false,
    message: 'Failed posting on MailChimp',
  });
  const info = ctx.request.body;
  console.log(mailchimp);
  console.log(mcListId);
  console.log(info);

  mailchimp.post(`lists/${mcListId}`, {
    members: [{
      email_address: info.email_address,
      status: 'subscribed',
      merge_fields: {
        'FNAME': info.fname,
      },
      tags: info.tags,
    }],
  }).then(m => {
    if (m.errors && m.errors.length > 0) {
      console.log('Error adding new subscriber to MC', m.errors);
      if (m.statusCode == 200){
        mailchimp.post(`lists/${mcListId}`, {
          members: [{
            email_address: info.email_address,
            status: 'subscribed',
            merge_fields: {
              'FNAME': info.fname,
            },
            tags: info.tags,
          }],
          update_existing: true,
        }).then(m => {
          if (m.errors && m.errors.length > 0) {
            console.log('Error adding new subscriber to MC', m.errors);
          }
          return m;
        }).catch(err => {
          console.warn('Failed adding subscriber', ctx.request.body.email_address, err);
        });
      }
    }
    return m;
  }).catch(err => {
    console.warn('Failed adding subscriber', ctx.request.body.email_address, err);
  });
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
    for (var i = 0; i < m.total_items; i++) {
      for (var j = 0; j < templist.length; j++) {
        if (templist[j] === segments[i].name) {
          console.log(`the Tags that needs to be added: ${segments[i].name}`);
          mailchimp.post(`lists/${mcListId}/segments/${segments[i].id}/members`, {
            'email_address': info.email,
          }).then(mes => {
            if (mes.errors) {
              console.log('Error Deleting Tags', mes.errors);
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
