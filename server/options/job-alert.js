// import Logger from '@/Logger';
import Scheduler from '@/Scheduler';
import Mailer from '@/utils/Mailer';
import Models from '@/mongodb/Models';
import Hashids from 'hashids';

// const alertJobsLimit = 10;

Scheduler.schedule(async () => {
  console.log('Job-Recommender scheduler works!');
  const hashids = new Hashids();
  try {
    const students = await Models.Account.find({
      'account_type': 'student',
      'email_verified': true,
      'preferences.jobAlertUnsubscribed': {
        '$ne': true,
      },
    });
    await Promise.all(students.map((student) =>
      new Promise(async (resolve) => {
        try {
          const applications = await Models.Applicant.find({ user_id: student._id }).populate('job_id');
          // Find ids & position tags & cities of already applied jobs.
          let ids = [];
          const positionTags = [];
          const cities = [];
          const states = [];
          applications.forEach((application) => {
            const job = application.job_id;
            ids.push(job._id);
            for (let i = 0; job.position_tags && i < job.position_tags.length; i++) {
              if (positionTags.indexOf(job.position_tags[i]) === -1) {
                positionTags.push(job.position_tags[i]);
              }
            }
            if (application.city && cities.indexOf(application.city) === -1) {
              cities.push(application.city);
            }
            if (application.state && states.indexOf(application.state) === -1) {
              states.push(application.state);
            }
          });
          // search by position tag, city, state
          let jobs = await Models.Job.find({
            '_id': { '$not': { '$in': ids } },
            '$or': [{ 'position_tags': { '$elemMatch': { '$in': positionTags } } }, { 'city': { '$in': cities } }, { 'state': { '$in': states } }],
            'expired': false,
            'active': true,
            'is_deleted': false,
          }).sort({ 'date': 1 });
          ids = ids.concat(jobs.map((item) => item._id));
          // search by search history: max 10 jobs only
          const searchHistory = student.search_history;
          if (searchHistory && searchHistory.length > 0) {
            const center = {
              latitude: 0,
              longitude: 0,
            };
            searchHistory.forEach((value) => {
              center.latitude += value.latitude;
              center.longitude += value.longitude;
            });
            center.latitude /= searchHistory.length;
            center.longitude /= searchHistory.length;
            const jobs1 = await Models.Job.aggregate([
              {
                '$project': {
                  '_id': 1,
                  'active': 1,
                  'expired': 1,
                  'type': 1,
                  'type2': 1,
                  'shift': 1,
                  'pay_type': 1,
                  'is_deleted': 1,
                  'posted_by': 1,
                  'title': 1,
                  'date': 1,
                  'address': 1,
                  'address2': 1,
                  'studentfriendly': 1,
                  'salary': 1,
                  'pay_denomination': 1,
                  'salary_max': 1,
                  'salary_min': 1,
                  'city': 1,
                  'state': 1,
                  'zip': 1,
                  'distance': {
                    '$add': [
                      {
                        '$pow': [
                          {
                            '$subtract': [
                              '$latitude',
                              center.latitude,
                            ],
                          },
                          2,
                        ],
                      },
                      {
                        '$pow': [
                          {
                            '$subtract': [
                              '$longitude',
                              center.longitude,
                            ],
                          },
                          2,
                        ],
                      },
                    ],
                  },
                },
              },
            ]).match({
              '_id': { '$not': { '$in': ids } },
              'expired': false,
              'active': true,
              'is_deleted': false,
            }).sort({
              'distance': 1,
            }).limit(10)
              .exec();
            jobs = jobs.concat(jobs1);
          }
          if (jobs.length > 0) {
            jobs.forEach((job) => {
              // job type
              const jobType = [];
              for (const j in job.type) {
                if (typeof job.type[j] === 'string') {
                  const type = job.type[j];
                  if (type === 'fulltime') {
                    jobType.push('Full-Time');
                  } else if (type === 'parttime') {
                    jobType.push('Part-Time');
                  } else {
                    jobType.push(type);
                  }
                }
              }
              job.jobType = jobType.join(' / ');
              // job address
              if (job.city) {
                job.formattedAddress = `${job.city}`;
                if (job.state) {
                  job.formattedAddress = `${job.formattedAddress}, ${job.state}`;
                }
              } else {
                job.formattedAddress = job.address;
              }
              // job salary
              let salary = '';
              if (job.pay_type === 'paid') {
                const sal = job.salary.toFixed(2);
                let pdenom = ` ${job.pay_denomination}`;
                if (job.pay_denomination === 'per hour') {
                  pdenom = '/hr';
                }
                salary = `${sal.toString()}${pdenom}`;
              } else if (job.pay_type === 'negotiable') {
                job.salary_min = job.salary_min || 0;
                job.salary_max = job.salary_max || 0;
                const salMin = job.salary_min.toFixed(2);
                const salMax = job.salary_max.toFixed(2);
                let pdenom = ` ${job.pay_denomination}`;
                if (job.pay_denomination === 'per hour') {
                  pdenom = '/hr';
                }
                salary = `${salMin.toString()} ~ ${salMax.toString()}${pdenom}`;
              } else {
                salary = job.pay_type;
              }
              job.formattedSalary = salary;
              // job internship
              job.internship = '';
              if (Array.isArray(job.type2) && job.type2.length > 0) {
                job.internship = job.type2.join(', ');
              }
              // job shift
              job.formattedShift = job.shift.join(', ');
            });
            const mailer = new Mailer();
            const mailOptions = {
              fname: student.firstname,
              date: `${(new Date()).getMonth() + 1}-${(new Date()).getDate()}-${(new Date()).getFullYear()}`,
              jobs,
              hashid: hashids.encodeHex(`${student._id}`),
            };
            await mailer.sendTemplate(
              student.email,
              'job-alert',
              mailOptions,
            );
            resolve();
          } else {
            resolve();
          }
        } catch (err) {
          console.log(err);
          resolve();
        }
      }),
    ));
  } catch (err) {
    console.log(err);
  }
  console.log('Job alert finished!');
});

Scheduler.install();
