import Raven from 'raven-js';
import Config from 'config';

Raven
  .config(Config.get('sentry.dsn'))
  .install();
