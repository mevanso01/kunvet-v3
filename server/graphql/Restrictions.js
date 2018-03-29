import Logger from 'winston';
import set from 'lodash/set';
import get from 'lodash/get';
import pick from 'lodash/pick';
import omit from 'lodash/omit';

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

  // Restriction factories
  getFilterByUserId(idField) {
    // Applies a filter that matches the user ID on a field
    return (req, next) => {
      set(req, ['args', 'filter', idField], req.context.user._id);
      return next(req);
    };
  },
  getFilterResultFields(allowedFields) {
    // Restricts allowed fields in the result
    return async (req, next) => {
      const result = await next(req);
      return result.map(e => pick(e, allowedFields));
    };
  },
  getDropResultFields(forbiddenFields) {
    // Drops forbidden fields in the result
    // The exact opposite of FilterResultFields
    return async (req, next) => {
      const result = await next(req);
      return result.map(e => omit(e, forbiddenFields));
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
