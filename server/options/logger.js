import Logger from 'winston';

const transports = {
  console: new Logger.transports.Console({
    level: 'warn',
    handleExceptions: true,
    json: false,
  }),
};

if (process.env.NODE_ENV === 'development') {
  transports.console.level = 'debug';
  transports.console.colorize = true;
}

Logger.configure({
  transports: [
    transports.console,
  ],
});
