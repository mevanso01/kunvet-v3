export default {
  LoggedIn: (req, next) => {
    if (!req.context.user || !req.context.user._id) {
      throw Error('You must be logged in to perform this action.');
    }
    return next(req);
  },
  BusinessAccount: (req, next) => {
    if (!req.context.user.default_org) {
      throw Error('You must be an employer to perform this action.');
    }
    return next(req);
  },
  Forbidden: () => {
    throw Error('This action is disabled.');
  },
};
