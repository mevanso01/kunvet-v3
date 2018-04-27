import KunvetError from '#/KunvetError';
import ErrorCode from '#/ErrorCode';
import Config from 'config';
import Axios from 'axios';
import https from 'https';

export default class FileClient {
  constructor() {
    this._api = Axios.create({
      agent: new https.Agent({ keepAlive: true }),
    });
  }

  async _fulfillRequest(instructions, file) {
    switch (instructions.action) {
      case 'localUpload': {
        const data = new FormData();
        data.append('file', file);
        const response = await this._api.put(`/file/lupload/${instructions.id}`, data);

        if (!response.data.success) {
          throw new KunvetError(response.data);
        }

        break;
      }
      case 's3Upload': {
        // S3 POST upload
        const data = new FormData();
        for (const key of Object.keys(instructions.form.fields)) {
          data.append(key, instructions.form.fields[key]);
        }
        data.append('file', file);
        try {
          await this._api.post(instructions.form.url, data);
        } catch (e) {
          if (!e.response) {
            // There isn't a response at all - CORS?
            throw new KunvetError({
              errorCode: ErrorCode.UnknownError,
            });
          }

          const parser = new DOMParser();
          const dom = parser.parseFromString(e.response.data, 'text/xml');

          const awsCodes = dom.getElementsByTagName('Code');

          if (awsCodes.length) {
            const awsCode = awsCodes[0].textContent;
            if (awsCode === 'EntityTooLarge') {
              throw new KunvetError({
                errorCode: ErrorCode.FileTooLarge,
              });
            }
          }

          console.error(e);
          throw new KunvetError({
            errorCode: ErrorCode.UnknownError,
          });
        }

        break;
      }
      default: {
        throw Error(`Unsupported action ${instructions.action}`);
      }
    }
  }

  async uploadFile(id, file) {
    // Make a request
    const response = await this._api.get(`/file/rupload/${id}`);

    if (!response.data.action) {
      throw Error(`Uploading file failed: ${JSON.stringify(response.data)}`);
    }

    const instructions = response.data;
    return this._fulfillRequest(instructions, file);
  }

  async createFileSlot(filename, mimeType = 'application/octet-stream') {
    const response = await this._api.post('/file/create', {
      filename,
      mimeType,
    });

    if (!response.data.success) {
      throw new KunvetError(response.data);
    }

    return response.data.id;
  }

  // Let's break some rules for style
  // eslint-disable-next-line
  static getLink(id) {
    return `${Config.get('serverUrl')}/file/get/${id}`;
  }
}
