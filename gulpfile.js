/* eslint-disable arrow-body-style */

import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import shell from 'gulp-shell';
import archiver from 'archiver';

import colors from 'colors/safe';
import fs from 'fs';
import path from 'path';

import clientConfig from './build/webpack.config.client';
import serverConfig from './build/webpack.config.server';

const progress = {};

function redrawProgress() {
  if (!process.stdout.isTTY || process.env.TERM === 'dumb') {
    return;
  }
  const formatted = Object.keys(progress).map((task) => {
    const percent = progress[task].percent;
    const message = progress[task].message;
    const percentFormatted = colors.blue(`${percent}%`);
    return `${task}: ${percentFormatted} ${message}`;
  });
  process.stderr.clearLine();
  process.stderr.cursorTo(0);
  process.stderr.write(formatted.join(' | '));
}

function setProgress(task, percent, message) {
  progress[task] = {
    percent,
    message,
  };
  redrawProgress();
}

function processWebpackConfig(task, config) {
  const newConfig = Object.assign({}, config);
  newConfig.plugins.push(new webpack.ProgressPlugin((percentage, message) => {
    const percent = Math.round(percentage * 100);
    setProgress(task, percent, message);
  }));
  if (['development', 'production'].includes(process.env.NODE_ENV)) {
    newConfig.mode = process.env.NODE_ENV;
  }
  return newConfig;
}

// Client SPA
gulp.task('client', () => {
  const config = processWebpackConfig('client', clientConfig);
  return gulp.src('client/index.js')
    .pipe(webpackStream(config, webpack))
    .pipe(gulp.dest('dist/client'));
});

// Node.js Server
gulp.task('server', () => {
  const config = processWebpackConfig('server', serverConfig);
  return gulp.src('server/index.js')
    .pipe(webpackStream(config, webpack))
    .pipe(gulp.dest('dist/server'));
});

// Install node_modules for server artifact
gulp.task('server-node-modules', ['server'],
  shell.task('npm install', {
    cwd: 'dist/server',
  }),
);

// Copy email templates into server artifact
gulp.task('server-email-templates', ['server'], () => {
  return gulp.src('email-templates/**/*')
    .pipe(gulp.dest('dist/server/email-templates'));
});


// AWS Lambda Deployment Package
gulp.task('lambda', ['server', 'server-node-modules', 'server-email-templates'], (callback) => {
  const sourcePath = path.resolve(__dirname, 'dist/server');
  const outputPath = path.resolve(__dirname, 'dist/lambda.zip');

  const file = fs.createWriteStream(outputPath);
  const archive = archiver('zip', {
    zlib: { level: 9 },
  });

  file.on('close', callback);
  archive.on('progress', (p) => {
    const percent = Math.round((p.fs.processedBytes / p.fs.totalBytes) * 100);
    setProgress('lambda', percent, 'compressing');
  });
  archive.pipe(file);
  archive.directory(sourcePath, false);
  archive.finalize();
});

gulp.task('default', ['client', 'server', 'lambda']);
