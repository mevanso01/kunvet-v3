import Config from 'config';
import Mongoose from 'mongoose';
import Logger from '@/Logger';

Mongoose.Promise = global.Promise;

export default class Db {
  static connect() {
    const db = Config.get('private.database');
    Logger.info(`Using database ${db}`);
    return Mongoose.connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      // useMongoClient: true,
    });
  }
  static get mongoose() {
    return Mongoose;
  }
}
