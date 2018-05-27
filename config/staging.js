/*
 * Staging configurations
 *
 * Activate this with NODE_CONFIG_ENV=staging
 *
 * Inherited from production, with several
 * keys overridden
*/

const colors = require('colors/safe');

if (process.env.NODE_ENV !== 'production') {
  console.error(colors.red.bold(`
***** 🤔 *****
** Hmm. You are running the staging configuration without NODE_ENV set to 'production'.
**
** You must start the server with NODE_ENV=production, and enable this
** configuration with NODE_CONFIG_ENV=staging.
**
** -- Your friend, the Hmm Face
*************
`));
  process.exit(1);
}

const base = Object.assign({}, require('./production.js'));

// Disable all forms of analytics
base.analytics = false;

module.exports = base;
