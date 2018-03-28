/*
 * Development configurations
 *
 * Inherited from production, with several
 * keys overridden
*/

const base = require('./production.js');

// base.serverUrl = 'http://localhost:3000';
base.serverUrl = 'https://nm9k39t3a7.execute-api.us-west-1.amazonaws.com/testprod';
base.private.database = 'mongodb://localhost/kunvet-dev';
base.private.files.defaultStorage = 'local';
base.private.files.s3.bucket = 'kunvet-dev';

module.exports = base;
