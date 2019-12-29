/*
 * Development configurations
 *
 * Inherited from production, with several
 * keys overridden
*/

const base = Object.assign({}, require('./production.js'));

base.serverUrl = 'http://localhost:3000';
base.private.database = 'mongodb://192.168.2.120/kunvet-dev';
base.private.files.defaultStorage = 'local';
base.private.files.s3.bucket = 'kunvet-dev';
base.private.cors.allowedOrigins.push('http://localhost:8080');
base.private.cors.allowedOrigins.push('http://localhost:8081');

module.exports = base;
