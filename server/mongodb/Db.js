import Config from 'config';
import Mongoose from 'mongoose';
import Logger from '@/utils/Logger';

Mongoose.Promise = global.Promise;

export default class Db {
  static connect() {
    Logger.info(`Using database ${Config.database}`);
    return Mongoose.connect(Config.database, {
      useMongoClient: true,
    });
  }
}
