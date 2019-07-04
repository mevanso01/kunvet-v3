import Winston from 'winston';
import Sentry from 'winston-raven-sentry';
import Config from 'config';

const transports = {
  console: new Winston.transports.Console({
    level: 'info',
    handleExceptions: true,
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

const logger = Winston.createLogger({
  level: 'info',
  transports: enabled,
});

export default logger;
