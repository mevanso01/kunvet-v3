import Logger from 'winston';
import Sentry from 'winston-raven-sentry';
import Config from 'config';

const transports = {
  console: new Logger.transports.Console({
    level: 'warn',
    handleExceptions: true,
    json: false,
  }),
  sentry: new Sentry({
    dsn: Config.get('private.sentry.dsn'),
    level: 'warn',
  }),
};

const enabled = [transports.console];

if (process.env.NODE_ENV === 'development') {
  transports.console.level = 'debug';
  transports.console.colorize = true;
} else {
  enabled.push(transports.sentry);
}

Logger.configure({
  transports: enabled,
});
