// import Logger from '@/Logger';
import Scheduler from '@/Scheduler';
import Mailer from '@/utils/Mailer';
// import JobHelper from '@/../client/utils/JobHelper';

// Test task
Scheduler.schedule(() => {
  console.log('Job-Recommender scheduler works!');
});

Scheduler.schedule(async () => {
  try {
    const mailer = new Mailer();
    await mailer.sendTemplate(
      'mevansg02@gmail.com',
      'job-alert',
      {},
    );
  } catch (err) {
    console.log(err);
  }
});

Scheduler.install();
