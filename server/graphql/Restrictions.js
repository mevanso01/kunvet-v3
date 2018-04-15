import Logger from 'winston';
import Models from '@/mongodb/Models';
import set from 'lodash/set';
import get from 'lodash/get';
import pick from 'lodash/pick';
import omit from 'lodash/omit';
import intersection from 'lodash/intersection';

/* IMPORT MAILER AND UNCOMMENT WHEN YOU WANT TO USE
async function _sendNotification(user, jobname) {
  const mailer = new Mailer();
  try {
    await mailer.sendTemplate(
      user.email,
      `application-created`,
      {
        name: `${user.firstname} ${user.lastname}`,
        jobname: jobname,
      },
    );
  } catch (e) {
    console.log('ERROR', e);
    const response = {
      success: false,
      message: 'Email could not be sent',
    };
    return JSON.stringify(response);
  }

  try {
    user.notifications.push({
      text: `Your job has a new applicant!`,
      route: '/applicants',
      notification_type: 'application',
      date: Date.now,
    });
    user.save();
  } catch (e) {
    console.log('ERROR', e);
    const response = {
      success: false,
      message: 'Email could not be sent',
    };
    return JSON.stringify(response);
  }

  const response = {
    success: true,
    message: 'Notifation created',
  };
  return JSON.stringify(response);
}
*/

export default {
  Debug: async (req, next) => {
    Logger.debug(req);
    const result = await next(req);
    Logger.debug(result);
    return result;
  },
  LoggedIn: (req, next) => {
    if (!req.context.user || !req.context.user._id) {
      throw Error('You must be logged in to perform this action.');
    }
    return next(req);
  },
  Verified: (req, next) => {
    if (!req.context.user.email_verified) {
      throw Error('You must verify your email to perform this action/');
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

    const jobIds = (await Models.Job.find({
      user_id: req.context.user._id,
    })).map(job => job.id);

    if (Array.isArray(result)) {
      result = result.filter(application => jobIds.includes(application.job_id));
      return result;
    }

    if (jobIds.includes(result.job_id)) {
      return result;
    }

    return null;
  },

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
