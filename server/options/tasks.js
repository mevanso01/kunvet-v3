import Logger from '@/Logger';
import Scheduler from '@/Scheduler';
import Config from 'config';
import Models from '@/mongodb/Models';
import AlgoliaSearch from 'algoliasearch';
import Mailer from '@/utils/Mailer';
import GAuth from '@/utils/GoogleAuth';
import JobHelper from '@/../client/utils/JobHelper';
import { buildAllSitemaps } from '../tools/sitemap-generator';

const request = require('request');

// Test task
Scheduler.schedule(() => {
  Logger.debug('The scheduler works!');
});

const daysToExpireFallback = 30;

const oneDay = 24 * 60 * 60 * 1000;

Scheduler.schedule(async () => { // filter all expired jobs and update attribute
  console.log('Scheduling expired job removal');
  console.log('Expire time is', Config.get('daysToExpire'));
  let jobsFound = null;
  try {
    jobsFound = await Models.Job.find({ 'expired': false, 'active': true });
  } catch (err) {
    console.log(err);
    return;
  }
  const today = new Date();
  const expiredJobs = [];
  const toDeleteJobIds = [];
  const daysToExpire = Config.get('daysToExpire') || daysToExpireFallback;

  // fetch expired jobs only
  jobsFound.forEach((job) => {
    const expiredDate = new Date(Date.parse(job.date) + (daysToExpire * oneDay));
    if (!job.is_deleted && !job.expired && today.getTime() > expiredDate.getTime()) {
      expiredJobs.push(job);
    }
    if (job.is_deleted || today.getTime() > expiredDate.getTime()) {
      toDeleteJobIds.push(job._id);
    }
  });
  // get google indexing api access token
  let accessToken = null;
  try {
    const gauthHeaders = await GAuth.getAuthRequestHeaders();
    accessToken = '';
    if (gauthHeaders && gauthHeaders.Authorization) {
      accessToken = gauthHeaders.Authorization.slice(7);
    } else {
      accessToken = GAuth.getAccessToken();
    }
  } catch (err) {
    console.log('--------------- google indexing failure ---------------', err);
  }
  console.log(accessToken);
  // Send expiry mails & Delete from google indexing
  try {
    await Promise.all(expiredJobs.map((expiredJob) =>
      new Promise(async (resolve) => {
        const jobId = expiredJob._id;
        try {
          const query0 = Models.Job.findOneAndUpdate(
            { '_id': jobId },
            { $set: { 'expired': true } },
            { new: true },
          );
          const query1 = Models.Account.find({
            '_id': expiredJob.user_id,
          });
          const query2 = Models.Applicant.find({
            'job_id': jobId,
            'date': { $gt: today - (daysToExpire * oneDay) },
          });
          const queries = [query1, query2, query0];
          if (process.env.NODE_ENV === 'production' && Config.get('googleIndexing')) {
            // Update Google indexing
            if (accessToken) {
              const options = {
                url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
                method: 'POST',
                // Your options, which must include the Content-Type and auth headers
                headers: {
                  'Content-Type': 'application/json',
                },
                auth: { 'bearer': accessToken },
                // Define contents here. The structure of the content is described in the next step.
                json: {
                  'url': `https://kunvet.com/job/${jobId}`,
                  'type': 'URL_DELETED',
                },
              };
              queries.push(request(options));
            }
          }
          const [jobPoster, applicants] = await Promise.all(queries);
          if (jobPoster && jobPoster.length > 0 && applicants) {
            console.log('------------------------------');
            const appsReceived = applicants.length;
            const jobType = [];
            for (const j in expiredJob.type) {
              if (typeof expiredJob.type[j] === 'string') {
                const type = expiredJob.type[j];
                if (type === 'fulltime') {
                  jobType.push('FULL TIME');
                } else if (type === 'parttime') {
                  jobType.push('PART TIME');
                } else {
                  jobType.push(type);
                }
              }
            }
            let salary = '';
            if (expiredJob.pay_type === 'paid') {
              const sal = expiredJob.salary.toFixed(2);
              let pdenom = ` ${expiredJob.pay_denomination}`;
              if (expiredJob.pay_denomination === 'per hour') {
                pdenom = '/hr';
              }
              salary = `${sal.toString()}${pdenom}`;
            } else if (expiredJob.pay_type === 'negotiable') {
              expiredJob.salary_min = expiredJob.salary_min || 0;
              expiredJob.salary_max = expiredJob.salary_max || 0;
              const salMin = expiredJob.salary_min.toFixed(2);
              const salMax = expiredJob.salary_max.toFixed(2);
              let pdenom = ` ${expiredJob.pay_denomination}`;
              if (expiredJob.pay_denomination === 'per hour') {
                pdenom = '/hr';
              }
              salary = `${salMin.toString()} ~ ${salMax.toString()}${pdenom}`;
            } else {
              salary = expiredJob.pay_type;
            }
            const mailer = new Mailer();
            const mailOptions = {
              fname: jobPoster[0].firstname,
              jobname: expiredJob.title,
              daysToExpire,
              fullAddress: JobHelper.getFullAddress(expiredJob),
              jobtype: jobType.join(' / '),
              salary,
              appsReceived: appsReceived === 0 ? 'no' : appsReceived,
            };
            await mailer.sendTemplate(
              jobPoster[0].email,
              'job-expired',
              mailOptions,
            );
            console.log(`--------------- expire mail sent: ${jobPoster[0].email} ---------------`);
          }
        } catch (err) {
          console.log(err);
          resolve();
        }
      }),
    ));
  } catch (err) {
    console.log('--------------- expire mail failure ---------------', err);
  }
  // Remove jobs from algolia
  const appId = Config.get('algolia.appId');
  const apiKey = Config.get('private.algolia.adminApiKey');
  if (toDeleteJobIds.length > 0 && appId && apiKey) {
    const client = AlgoliaSearch(appId, apiKey);
    const index = client.initIndex('jobs');
    try {
      await index.deleteObjects(toDeleteJobIds);
      Logger.info(`Automatically deleting ${toDeleteJobIds.join(', ')} from Algolia`);
    } catch (err) {
      console.log('--------------- Algolia delete failure ---------------', err);
    }
  }
});

// Rebuild sitemaps everyday
Scheduler.schedule(() => {
  console.log('Rebuilding sitemaps');
  buildAllSitemaps();
});

Scheduler.install();
