/*
 * Kunvet Logger
 *
 * Just a thin wrapper around console.log() at the moment, with Sentry
 * integration.
 *
 * .log | Vue.prototype.$log
 * Same as console.log(). Use sparingly.
 *
 * .debug | Vue.prototype.$debug
 * Development: Same as console.log()
 * Production:  Stripped out
 *
 * .error | Vue.prototype.$error
 * Development: Same as console.error()
 * Production:  Reports the error through Sentry
 */

import Raven from 'raven-js';

function logInternal(level = 'log', ...msg) {
  if (level === 'log') {
    console.log(...msg);
  }

  if (process.env.NODE_ENV === 'development') {
    // Development
    if (level === 'debug') {
      console.log('DEBUG', ...msg);
    } else if (level === 'error') {
      if (typeof msg[0] === 'string') {
        logInternal('debug', 'Please always call .error() with an Error!');
      }
      console.error(...msg);
    }
  } else if (level === 'error') {
    // Production .error()
    // This will not output message to the console.
    Raven.captureException(msg[0]);
  }
}

let log;
let debug;
const error = (...msg) => logInternal('error', ...msg);

if (process.env.NODE_ENV === 'development') {
  log = console.log;
  debug = console.log.bind(console, 'DEBUG');
} else {
  log = (...msg) => logInternal('log', ...msg);
  debug = (...msg) => logInternal('debug', ...msg);
}

export default {
  log,
  debug,
  error,
  install(Vue) {
    Vue.prototype.$log = log;
    Vue.prototype.$debug = debug;
    Vue.prototype.$error = error;
  },
};
