import Logger from 'winston';
import Sentry from 'winston-raven-sentry';
import Config from 'config';

const transports = {
  console: new Logger.transports.Console({
    level: 'info',
    handleExceptions: true,
    json: false,
  }),
  sentry: new Sentry({
    dsn: Config.get('private.sentry.dsn'),
    level: 'info',
  }),
};

const enabled = [transports.console];

if (process.env.NODE_ENV === 'development') {
  transports.console.level = 'debug';
  transports.console.colorize = true;
} else {
  enabled.push(transports.sentry);
}

if (process.env.LAMBDA_TASK_ROOT && process.env.AWS_EXECUTION_ENV) {
  // Log in JSON on AWS Lambda
  transports.console.json = true;
}

Logger.configure({
  transports: enabled,
});
