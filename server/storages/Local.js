/* eslint-disable class-methods-use-this */

import path from 'path';
import fs from 'fs';
import uuidv1 from 'uuid/v1';
import send from 'koa-send';
import Mime from 'mime-types';
import Storage from '../Storage';

export default class Local extends Storage {
  constructor() {
    super();
    this.path = path.resolve(process.cwd(), 'uploads/');
  }

  localUpload(file, lpath) {
    return new Promise((resolve, reject) => {
      const extension = Mime.extension(file.mimeType);
      let name;
      if (file.backendPath) {
        name = file.backendPath;
      } else {
        name = `${uuidv1()}.${extension}`;
      }

      fs.createReadStream(lpath)
        .pipe(fs.createWriteStream(`${this.path}/${name}`))
        .on('finish', () => {
          resolve(name);
        })
        .on('error', reject);
    });
  }

  async localDownload(file, ctx) {
    const lpath = `${this.path}/${file.backendPath}`;
    return send(ctx, lpath, {
      root: '/',
    });
  }

  deleteFile(file) {
    return new Promise((resolve, reject) => {
      const lpath = `${this.path}/${file.backendPath}`;
      fs.unlink(lpath, (err) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });
  }
}
