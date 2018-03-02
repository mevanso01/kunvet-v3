/* eslint-disable class-methods-use-this */

import path from 'path';
import fs from 'fs';
import Storage from '../Storage';

export default class Local extends Storage {
  constructor() {
    super();
    this.path = path.resolve(process.cwd(), 'uploads/');
  }

  getTempUploadPath() {
    return this.path;
  }

  async uploadFile(local, _name) {
    // We are not honoring name here
    console.log(_name);
    const fname = local.split('\\').pop().split('/').pop();
    return fname;
  }

  async getLink(id) {
    return `file://${this.path}/${id}`;
  }

  async deleteFile(id) {
    const local = `${this.path}/${id}`;
    if (fs.existsSync(local)) {
      fs.unlinkSync(local);
    }
  }
}
