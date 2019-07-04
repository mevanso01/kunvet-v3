/* eslint-disable */

import uuidv1 from 'uuid/v1';
import Aws from 'aws-sdk';
import Mime from 'mime-types';
import Config from 'config';
import Storage from '../Storage';

Aws.config.update(Config.get('private.aws'));

export default class S3 extends Storage {
  constructor() {
    super();
    this.s3 = new Aws.S3();
  }

  static async _getS3Key(file) {
    const extension = Mime.extension(file.mimeType);
    if (file.backendPath) {
      return file.backendPath;
    } else {
      file.backendPath = `${uuidv1()}.${extension}`;
      await file.save();
      return file.backendPath;
    }
  }

  async requestUpload(file) {
    const name = await this.constructor._getS3Key(file);

    const params = {
      Bucket: Config.get('private.files.s3.bucket'),
      Fields: {
        Key: name,
        ContentType: file.mimeType,
        'Content-Type': file.mimeType,
      },
      Conditions: [
        ['content-length-range', 1, 10485760], // 10MB max
      ],
    };

    const signed = this.s3.createPresignedPost(params);

    return {
      action: 's3Upload',
      form: signed,
    };
  }

  async getLink(file) {
    const url = this.s3.getSignedUrl('getObject', {
      Bucket: Config.get('private.files.s3.bucket'),
      Key: file.backendPath,
      Expires: 10, // seconds
    });

    return url;
  }

  async deleteFile(file) {
    return this.s3.deleteObject({
      Bucket: Config.get('private.files.s3.bucket'),
      Key: file.backendPath,
    }).promise();
  }

  async getBuffer(file) {
    const data = await this.s3.getObject({
      Bucket: Config.get('private.files.s3.bucket'),
      Key: file.backendPath,
    }).promise();
    return data.Body;
  }
}
