import composeWithMongoose from 'graphql-compose-mongoose';
import { GQC, Resolver } from 'graphql-compose';
import Logger from 'winston';
import Mailer from '@/utils/Mailer';
import Models from '../mongodb/Models';
import Restrictions from './Restrictions';

// GraphQL types
const Job = composeWithMongoose(Models.Job);
const Account = composeWithMongoose(Models.Account);
const Applicant = composeWithMongoose(Models.Applicant);
const Organization = composeWithMongoose(Models.Organization);
const HDYH = composeWithMongoose(Models.HDYH);

// Helper functions
function wrapResolvers(fn, resolvers) {
  const farr = Array.isArray(fn) ? fn : [fn];

  Object.keys(resolvers).forEach((k) => {
    for (const f of farr) {
      resolvers[k] = resolvers[k].wrapResolve(next => req => f(req, next));
    }
  });

  return resolvers;
}

async function sendNewApplicationNotification(req, next) {
  const mailer = new Mailer();
  const user = req.context.user;
  let job = null;
  let employer = null;

  try {
    job = await Models.Job.findOne({
      _id: req.args.record.job_id,
    });
    employer = await Models.Account.findOne({
      _id: job.user_id,
    });
  } catch (e) {
    Logger.error(e);
    throw Error('Invalid job');
  }

  try {
    await mailer.sendTemplate(
      employer.email,
      'application-created',
      {
        replyTo: user.email,
        name: `${user.firstname} ${user.lastname}`,
        jobname: job.title,
        employername: employer.firstname,
        email: user.email,
        degree: req.args.record.degree,
        school: req.args.record.school,
      },
    );
  } catch (e) {
    Logger.error(e);
    // throw Error('Employer could not be emailed');
  }

  try {
    employer.notifications.push({
      text: `New applicant: ${user.firstname} ${user.lastname}`,
      route: '/applicants',
      notification_type: 'application',
      date: Date.now,
    });
    employer.save();
  } catch (e) {
    Logger.error(e);
    // throw Error('Employer could not be notified');
  }

  return next(req);
}

// Redact fields from client
Account.removeField(['password', 'hash', 'salt', 'is_developer']);

// Root query fields
GQC.rootQuery().addFields({
  // Job
  findJob: Job.get('$findOne'),
  findJobs: Job.get('$findMany'),

  // findAccount: Account.get('$findOne'),
  // findAccounts: Account.get('$findMany'),
  // Account
  ...wrapResolvers([
    Restrictions.getFilterByUserId('_id'),
    Restrictions.LoggedIn,
  ], {
    findAccount: Account.get('$findOne'),
    findAccounts: Account.get('$findMany'),
  }),
  // Applicants
  ...wrapResolvers([
    Restrictions.getFilterByUserId('user_id'),
    Restrictions.LoggedIn,
    Restrictions.getDropResultFields(['notes']),
  ], {
    // Find own applications (for employees)
    findMyApplication: Applicant.get('$findOne'),
    findMyApplications: Applicant.get('$findMany'),
  }),

  ...wrapResolvers([
    Restrictions.ApplicationJobOwner,
  ], {
    // Find employer's applications
    findApplicant: Applicant.get('$findOne'),
    findApplicants: Applicant.get('$findMany'),
  }),

  // Business Profile
  findOrganization: Organization.get('$findOne'),
  findOrganizations: Organization.get('$findMany'),
  // Developer-only
  ...wrapResolvers(Restrictions.DeveloperAccount, {
    getDirtyLittleSecrets: new Resolver({
      name: 'getDirtyLittleSecrets',
      type: 'String',
      resolve: () => 'Shh...',
    }),
  }),
});

// Root mutation fields
GQC.rootMutation().addFields({
  // All mutations require logging in
  ...wrapResolvers(Restrictions.LoggedIn, {
    // == Create ==
    ...wrapResolvers([
      Restrictions.getEnsureRecordHasUserId('user_id'),
      Restrictions.Verified,
    ], {
      createJob: Job.get('$createOne'),
      ...wrapResolvers(sendNewApplicationNotification, {
        createApplication: Applicant.get('$createOne'),
      }),
    }),
    // == Update ==
    ...wrapResolvers([
      Restrictions.getFilterByUserId('_id'),
      Restrictions.getForbiddenRecordFields(['email_verified']),
    ], {
      updateAccount: Account.get('$updateOne'),
    }),
    ...wrapResolvers([
      Restrictions.Debug,
      Restrictions.getEnsureRecordHasUserId('user_id'),
      Restrictions.getFilterByUserId('user_id'),
    ], {
      updateJob: Job.get('$updateOne'),
      updateJobs: Job.get('$updateMany'),
    }),
    ...wrapResolvers(Restrictions.ApplicationJobOwnerMutation, {
      updateApplication: Applicant.get('$updateOne'),
    }),
    // == Remove ==
    ...wrapResolvers(Restrictions.getFilterByUserId('user_id'), {
      removeJob: Job.get('$removeOne'),
      removeApplication: Applicant.get('$removeOne'),
    }),

    // == Organizations ==
    createOrganization: Organization.get('$createOne'),
    ...wrapResolvers(Restrictions.getFilterByUserId('user_id'), {
      updateOrganization: Organization.get('$updateOne'),
      removeOrganization: Organization.get('$removeOne'),
    }),

    // == Extra stuff ==
    createHDYH: HDYH.get('$createOne'),
    removeHDYH: HDYH.get('$removeOne'),

  }),
});

export default GQC.buildSchema();
