import Config from 'config';
import AlgoliaSearch from 'algoliasearch';
import Logger from '@/Logger';
import Models from '@/mongodb/Models';
import set from 'lodash/set';
import get from 'lodash/get';
import pick from 'lodash/pick';
import omit from 'lodash/omit';

const request = require('request');

export default {
  Debug: async (req, next) => {
    console.log(req);
    // Logger.debug(req);
    const result = await next(req);
    // Logger.debug(result);
    return result;
  },
  LogRecord: async (req, next) => {
    Logger.info(req.args.record);
    return next(req);
  },
  UploadJobToAlgolia: async (req, next) => {
    const appId = Config.get('algolia.appId');
    if (!appId || (process && process.env.NODE_ENV === 'development' && appId !== 'QDRYRAKU5K')) {
      // Algolia disabled // Purposely don't disable index QDRYRAKU5K in dev mode
      return next(req);
    }

    const client = AlgoliaSearch(appId, Config.get('private.algolia.adminApiKey'));
    const index = client.initIndex('jobs');

    const response = await next(req);
    if (response.recordId && response.record.active) {
      if (response.record.is_deleted) {
        // Delete from algolia
        await index.deleteObjects([response.record._id]);
        Logger.info(`Deleting ${response.record._id} from Algolia`);
      } else {
        const job = JSON.parse(JSON.stringify(response.record));
        job.objectID = job._id;
        if (job.latitude) {
          job._geoloc = {
            lat: job.latitude,
            lng: job.longitude,
          };
          job.date = Date.parse(job.date) / 1000;
        }
        await index.addObjects([job], (err, content) => {
          if (err) {
            console.log('Error uploading to algolia', err);
            Logger.error(`Error occured while uploading to Algolia for ${job.objectID}`);
          } else if (content) {
            console.log('Uploaded to Algolia', content);
            Logger.info(`Uploaded to Algolia ${job.objectID}`);
          }
        });
      }
    }
    return response;
  },
  LoggedIn: (req, next) => {
    if (!req.context.user || !req.context.user._id) {
      throw Error('You must be logged in to perform this action.');
    }
    return next(req);
  },
  Verified: (req, next) => {
    if (!req.context.user.email_verified) {
      throw Error('You must verify your email to perform this action.');
    }
    return next(req);
  },
  RecaptchaPassed: async (req, next) => {
    const recaptchaToken = req.args.record.recaptchaToken;
    delete req.args.record.recaptchaToken;
    // Check if it's a bot
    if (!recaptchaToken) {
      throw Error('You\'re a bot');
    }
    const options = {
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${Config.get('googleRecaptchaSECRET_KEY')}&response=${recaptchaToken}`,
      method: 'GET',
    };
    const checkRecaptcha = () => new Promise((resolve, reject) => {
      request(options, (error, res, body) => {
        // eslint-disable-next-line
        if (!error && res.statusCode == 200) {
          resolve(JSON.parse(body));
        } else {
          reject(error);
        }
      });
    });
    try {
      const recaptchaRes = await checkRecaptcha();
      if (!recaptchaRes.success || recaptchaRes.score < 0.5) {
        throw Error('You\'re a bot');
      }
    } catch (err) {
      throw Error(err);
    }
    return next(req);
  },
  // TODO: Implement business account restrictions
  // eslint-disable-next-line
  BusinessAccount: (req, next) => {
    /*
    if (!req.context.user.default_org) {
      throw Error('You must be an employer to perform this action.');
    }
    */
    return next(req);
  },
  DeveloperAccount: (req, next) => {
    if (process.env.NODE_ENV !== 'development') {
      throw Error('This action is disabled.');
    } else if (!req.context.user.is_developer) {
      throw Error('You must be a developer to perform this action.');
    }
    return next(req);
  },
  Forbidden: () => {
    throw Error('This action is disabled.');
  },

  ApplicationJobOwner: async (req, next) => {
    let result = await next(req);
    if (!result) {
      return result;
    }

    let jobIds = await Models.Job.find({
      user_id: req.context.user._id,
    });
    if (jobIds.lenght === 0) return null;
    jobIds = jobIds.map(job => job._id.toString());
    // console.log(jobIds);
    if (Array.isArray(result)) {
      // console.log('result', result);
      result = result.filter(application => jobIds.includes(application.job_id.toString()));
      return result;
    } else if (result.job_id && jobIds.includes(result.job_id.toString())) {
      return result;
    }

    return null;
  },

  // TODO: implement me!
  ApplicationJobOwnerMutation: (req, next) => next(req),

  // Restriction factories
  getFilterByUserId(idField) {
    // Applies a filter that matches the user ID on a field
    return (req, next) => {
      set(req, ['args', 'filter', idField], req.context.user._id);
      return next(req);
    };
  },
  getFilterRecordFields(allowedFields) {
    // Restricts allowed fields in the record
    return async (req, next) => {
      req.args.record = pick(req.args.record, allowedFields);
      return next(req);
    };
  },
  getForbiddenRecordFields(forbiddenFields) {
    // Restricts allowed fields in the record
    return async (req, next) => {
      req.args.record = omit(req.args.record, forbiddenFields);
      return next(req);
    };
  },
  getFilterResultFields(allowedFields) {
    // Restricts allowed fields in the result
    return async (req, next) => {
      const result = await next(req);
      if (Array.isArray(result)) {
        return result.map(e => pick(e, allowedFields));
      }
      return pick(result, allowedFields);
    };
  },
  getDropResultFields(forbiddenFields) {
    // Drops forbidden fields in the result
    // The exact opposite of FilterResultFields
    return async (req, next) => {
      const result = await next(req);
      if (!result) return result;
      if (Array.isArray(result)) {
        return result.map(e => omit(e, forbiddenFields));
      }
      return omit(result, forbiddenFields);
    };
  },
  getEnsureRecordHasUserId(idField) {
    // Ensures a field in the supplied record has the user ID
    return (req, next) => {
      const uid = get(req, ['args', 'record', idField]);
      if (uid !== req.context.user._id.toString()) {
        throw Error('User ID mismatch.');
      }
      return next(req);
    };
  },
};
