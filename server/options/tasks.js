import Logger from 'winston';
import Scheduler from '@/Scheduler';

// Test task
Scheduler.schedule(() => {
  Logger.debug('The scheduler works!');
});

Scheduler.install();
