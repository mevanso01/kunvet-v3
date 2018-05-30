// Storage backends
import LocalStorage from '@/storages/Local';
import S3Storage from '@/storages/S3';

import Models from '../mongodb/Models';

const backendCache = {};

export default {
  async get(id) {
    return Models.File.findOne({
      _id: id,
    });
  },
  getBackend(name) {
    if (backendCache[name]) {
      return backendCache[name];
    }

    let backend;
    switch (name) {
      case 'local':
        backend = new LocalStorage();
        break;
      case 's3':
        backend = new S3Storage();
        break;
      default:
        throw Error('Unknown backend');
    }
    backendCache[name] = backend;
    return backend;
  },
};
