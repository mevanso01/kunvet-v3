// import Logger from '@/Logger';
import Scheduler from '@/Scheduler';
import Mailer from '@/utils/Mailer';
import Models from '@/mongodb/Models';

// Test task
Scheduler.schedule(() => {
  console.log('Job-Recommender scheduler works!');
});

const alertJobsLimit = 10;

Scheduler.schedule(async () => {
  // TODO:
  // for each student
  //    - get job position tags in already applied jobs
  //    - find jobs matching tags and user location, not already applied
  //    - send emails
  try {
    const students = await Models.Account.find({ 'account_type': 'student' });
    await Promise.all(students.map((student) =>
      new Promise(async (resolve) => {
        try {
          const applications = await Models.Applicant.find({ user_id: student._id }).populate('job_id');
          let ids = [];
          const positionTags = [];
          applications.forEach((application) => {
            const job = application.job_id;
            ids.push(job._id);
            for (let i = 0; job.position_tags && i < job.position_tags.length; i++) {
              if (positionTags.indexOf(job.position_tags[i]) === -1) {
                positionTags.push(job.position_tags[i]);
              }
            }
          });
          let jobs = await Models.Job.find({
            '_id': { '$not': { '$in': ids } },
            'position_tags': { '$elemMatch': { '$in': positionTags } },
            'expired': false,
            'active': true,
            'is_deleted': false,
          }).limit(alertJobsLimit).sort({ 'date': 1 });
          if (jobs.length < alertJobsLimit) {
            ids = ids.concat(jobs.map((job) => job._id));
            // console.log(ids);
            const jobs1 = await Models.Job.find({
              '_id': { '$not': { '$in': ids } },
              'expired': false,
              'active': true,
              'is_deleted': false,
            }).limit(alertJobsLimit - jobs.length).sort({ 'date': 1 });
            jobs = jobs.concat(jobs1);
          }
          // console.log(jobs);
          if (jobs.length > 0) {
            jobs.forEach((job) => {
              // job type
              const jobType = [];
              for (const j in job.type) {
                if (typeof job.type[j] === 'string') {
                  const type = job.type[j];
                  if (type === 'fulltime') {
                    jobType.push('FULL TIME');
                  } else if (type === 'parttime') {
                    jobType.push('PART TIME');
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
