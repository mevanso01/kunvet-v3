/*
 * Development configurations
 *
 * Inherited from production, with several
 * keys overridden
*/

const base = Object.assign({}, require('./production.js'));

base.serverUrl = 'https://hrmy3ed4n1.execute-api.us-east-1.amazonaws.com/production';
// base.serverUrl = 'http://localhost:3000';
base.private.database = 'mongodb://localhost/kunvet-dev';
base.private.files.defaultStorage = 'local';
base.private.files.s3.bucket = 'kunvet-dev';

module.exports = base;
