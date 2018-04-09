import composeWithMongoose from 'graphql-compose-mongoose';
import { GQC, Resolver } from 'graphql-compose';
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
  findApplicant: Applicant.get('$findOne'),
  findApplicants: Applicant.get('$findMany'),
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
    ...wrapResolvers(Restrictions.getEnsureRecordHasUserId('user_id'), {
      createJob: Job.get('$createOne'),
      createApplication: Applicant.get('$createOne'),
    }),
    // == Update ==
    ...wrapResolvers(Restrictions.getFilterByUserId('_id'), {
      updateAccount: Account.get('$updateOne'),
    }),
    ...wrapResolvers([
      Restrictions.getEnsureRecordHasUserId('user_id'),
      Restrictions.getFilterByUserId('user_id'),
    ], {
      updateJob: Job.get('$updateOne'),
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
