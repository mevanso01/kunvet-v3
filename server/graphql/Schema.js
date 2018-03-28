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
const TempAccount = composeWithMongoose(Models.TempAccount);

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

  findTempAccount: TempAccount.get('$findOne'),
  findTempAccounts: TempAccount.get('$findMany'),

  findAccount: Account.get('$findOne'),
  findAccounts: Account.get('$findMany'),
  // Account
  /* ...wrapResolvers(Restrictions.getFilterByUserId('_id'), {
    findAccount: Account.get('$findOne'),
    findAccounts: Account.get('$findMany'),
  }), */
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
    // Account
    updateAccount: Account.get('$updateOne'),
    // Applicant
    createApplication: Applicant.get('$createOne'),
    updateApplication: Applicant.get('$updateOne'),
    removeApplication: Applicant.get('$removeOne'),
    // Extra stuff
    createHDYH: HDYH.get('$createOne'),
    removeHDYH: HDYH.get('$removeOne'),
    // Job
    createJob: Job.get('$createOne'),
    updateJob: Job.get('$updateOne'),
    removeJob: Job.get('$removeOne'),
    // Organization
    createOrganization: Organization.get('$createOne'),
    updateOrganization: Organization.get('$updateOne'),
    removeOrganization: Organization.get('$removeOne'),

    // Employer-only mutations
    ...wrapResolvers(Restrictions.BusinessAccount, {
    }),
  }),
});

export default GQC.buildSchema();
