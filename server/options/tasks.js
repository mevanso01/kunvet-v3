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

const daysToExpireFallback = 60;

const oneDay = 24 * 60 * 60 * 1000;
// const oneDay = 60 * 1000;

Scheduler.schedule(() => { // filter all expired jobs and update attribute
  console.log('Scheduling expired job removal');
  console.log('Expire time is', Config.get('daysToExpire'));
  Models.Job.find({}, async (err, jobsFound) => {
    const today = new Date();
    const expiredJobIds = [];
    const expiredJobs = [];
    const toDeleteJobIds = [];
    const daysToExpire = Config.get('daysToExpire') || daysToExpireFallback;

    jobsFound.forEach((job) => {
      const expiredDate = new Date(Date.parse(job.date) + (daysToExpire * oneDay));
      if (!job.expired && job.active && today.getTime() > expiredDate.getTime()) {
        expiredJobIds.push(job._id);
        expiredJobs.push(job);
      }
      const toBeDeletedTime = new Date(Date.parse(job.date) + (daysToExpire * oneDay));
      if (today.getTime() > toBeDeletedTime.getTime()) {
        toDeleteJobIds.push(job._id);
      }
    });
    for (let i = 0; i < expiredJobIds.length; ++i) {
      Models.Job.findOneAndUpdate(
        { '_id': expiredJobIds[i] },
        { $set: { 'expired': true } },
        { new: true },
        (/* err1, docs1 */) => {
        },
      );
      Models.Account.find({ '_id': expiredJobs[i].user_id }, (err2, jobPoster) => {
        if (err2) {
          console.log(err2);
          return;
        }
        if (!jobPoster || jobPoster.length === 0) {
          return;
        }
        Models.Applicant.find({ 'job_id': expiredJobIds[i] }, async (err4, applicants) => {
          if (err4) {
            console.log(err4);
            return;
          }
          if (!applicants) {
            return;
          }
          try {
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
            await mailer.sendTemplate(
              jobPoster[0].email,
              'job-expired',
              {
                fname: jobPoster[0].firstname,
                jobname: expiredJobs[i].title,
                daysToExpire,
                fullAddress: `${expiredJobs[i].address} ${expiredJobs[i].address2 || ''}`,
                jobtype: jobType.join(' / '),
                salary,
                appsReceived: appsReceived === 0 ? 'no' : appsReceived,
              },
            );
          } catch (err3) {
            console.log('Error sending email in sendVerificationCode()', err3);
          }
        });
      });
      if (process.env.NODE_ENV === 'production') {
        // Update Google indexing
        GAuth.getAuthRequestHeaders()
          .then(value => {
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
            request(options, (error, response, body) => {
              console.log(body);
            });
          })
          .catch(error => {
            console.log(error);
          });
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
});

Scheduler.install();
