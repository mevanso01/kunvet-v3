import Config from 'config';
import Mongoose from 'mongoose';
import Logger from '@/utils/Logger';

Mongoose.Promise = global.Promise;

export default class Db {
  static connect() {
    const db = Config.get('private.database');
    Logger.info(`Using database ${db}`);
    return Mongoose.connect(db, {
      useMongoClient: true,
    });
  }
  static get mongoose() {
    return Mongoose;
  }
}
