import Logger from '@/Logger';
import Scheduler from '@/Scheduler';
import Config from 'config';
import Models from '@/mongodb/Models';
import AlgoliaSearch from 'algoliasearch';
import Mailer from '@/utils/Mailer';
import GAuth from '@/utils/GoogleAuth';

const request = require('request');

// Test task
Scheduler.schedule(() => {
  Logger.debug('The scheduler works!');
});

const daysToExpireFallback = 30;

// const oneDay = 24 * 60 * 60 * 1000;
const oneDay = 60 * 1000;

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
  const expiredJobIds = [];
  const expiredJobs = [];
  const toDeleteJobIds = [];
  let daysToExpire = Config.get('daysToExpire') || daysToExpireFallback;
  daysToExpire = 5;

  jobsFound.forEach((job) => {
    const expiredDate = new Date(Date.parse(job.date) + (daysToExpire * oneDay));
    if (!job.is_deleted && today.getTime() > expiredDate.getTime()) {
      expiredJobIds.push(job._id);
      expiredJobs.push(job);
    }
    if (job.is_deleted || today.getTime() > expiredDate.getTime()) {
      toDeleteJobIds.push(job._id);
    }
  });
  for (let i = 0; i < expiredJobIds.length; ++i) {
    try {
      await Models.Job.findOneAndUpdate(
        { '_id': expiredJobIds[i] },
        { $set: { 'expired': true } },
        { new: true },
      );
      const jobPoster = await Models.Account.find({ '_id': expiredJobs[i].user_id });
      if (jobPoster && jobPoster.length > 0) {
        console.log('------------------------------');
        const applicants = await Models.Applicant.find({ 'job_id': expiredJobIds[i] });
        if (applicants) {
          console.log('------------------------------');
          const appsReceived = applicants.length;
          const jobType = [];
          for (const j in expiredJobs[i].type) {
            if (typeof expiredJobs[i].type[j] === 'string') {
              const type = expiredJobs[i].type[j];
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
          if (expiredJobs[i].pay_type === 'paid') {
            const sal = expiredJobs[i].salary.toFixed(2);
            let pdenom = ` ${expiredJobs[i].pay_denomination}`;
            if (expiredJobs[i].pay_denomination === 'per hour') {
              pdenom = '/hr';
            }
            salary = `${sal.toString()}${pdenom}`;
          } else if (expiredJobs[i].pay_type === 'negotiable') {
            expiredJobs[i].salary_min = expiredJobs[i].salary_min || 0;
            expiredJobs[i].salary_max = expiredJobs[i].salary_max || 0;
            const salMin = expiredJobs[i].salary_min.toFixed(2);
            const salMax = expiredJobs[i].salary_max.toFixed(2);
            let pdenom = ` ${expiredJobs[i].pay_denomination}`;
            if (expiredJobs[i].pay_denomination === 'per hour') {
              pdenom = '/hr';
            }
            salary = `${salMin.toString()} ~ ${salMax.toString()}${pdenom}`;
          } else {
            salary = expiredJobs[i].pay_type;
          }
          const mailer = new Mailer();
          const mailOptions = {
            fname: jobPoster[0].firstname,
            jobname: expiredJobs[i].title,
            daysToExpire,
            fullAddress: `${expiredJobs[i].address} ${expiredJobs[i].address2 || ''}`,
            jobtype: jobType.join(' / '),
            salary,
            appsReceived: appsReceived === 0 ? 'no' : appsReceived,
          };
          console.log(mailOptions);
          await mailer.sendTemplate(
            jobPoster[0].email,
            'job-expired',
            mailOptions,
          );
          console.log('--------------- expire mail success ---------------');
        }
      }
      if (process.env.NODE_ENV === 'production') {
        // Update Google indexing
        try {
          const value = await GAuth.getAuthRequestHeaders();
          let accessToken = '';
          if (value && value.Authorization) {
            accessToken = value.Authorization.slice(7);
          } else {
            accessToken = GAuth.getAccessToken();
          }
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
              'url': `https://kunvet.com/job/${expiredJobIds[i]}`,
              'type': 'URL_DELETED',
            },
          };
          await request(options);
          console.log('--------------- google indexing success ---------------');
        } catch (err) {
          console.log('--------------- google indexing failure ---------------', err);
        }
      }
    } catch (err3) {
      console.log('--------------- expire mail failure ---------------', err3);
    }
  }
  const appId = Config.get('algolia.appId');
  const apiKey = Config.get('private.algolia.adminApiKey');
  if (toDeleteJobIds.length > 0 && appId && apiKey) {
    const client = AlgoliaSearch(appId, apiKey);
    const index = client.initIndex('jobs');
    for (let i = 0; i < toDeleteJobIds.length; ++i) {
      const id = toDeleteJobIds[i];
      // Delete from algolia
      index.deleteObjects([id]);
      Logger.info(`Automatically deleting ${id} from Algolia`);
    }
  }
});

Scheduler.install();
