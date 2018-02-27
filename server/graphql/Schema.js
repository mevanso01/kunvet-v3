import composeWithMongoose from 'graphql-compose-mongoose';
import { GQC } from 'graphql-compose';
import Models from '../mongodb/Models';
import Restrictions from './Restrictions';

// GraphQL types
const Job = composeWithMongoose(Models.Job);
const Resume = composeWithMongoose(Models.Resume);
const Account = composeWithMongoose(Models.Account);
const Applicant = composeWithMongoose(Models.Applicant);
const BusinessProfile = composeWithMongoose(Models.BusinessProfile);
const Organization = composeWithMongoose(Models.Organization);

// Helper functions
function wrapResolvers(fn, resolvers) {
  Object.keys(resolvers).forEach((k) => {
    resolvers[k] = resolvers[k].wrapResolve(next => req => fn(req, next));
  });
  return resolvers;
}

// Root query fields
GQC.rootQuery().addFields({
  // Job
  findJob: Job.get('$findOne'),
  findJobs: Job.get('$findMany'),
  // Resume
  findResume: Resume.get('$findOne'),
  findResumes: Resume.get('$findMany'),
  // Account
  findAccount: Account.get('$findOne'),
  findAccounts: Account.get('$findMany'),
  // Applicants
  findApplicant: Applicant.get('$findOne'),
  findApplicants: Applicant.get('$findMany'),
  // Business Profile
  findBusinessProfile: BusinessProfile.get('$findOne'),
  findBusinessProfiles: BusinessProfile.get('$findMany'),
  // Employee Profile
  findOrganization: Organization.get('$findOne'),
  findOrganizations: Organization.get('$findMany'),
});

// Root mutation fields
GQC.rootMutation().addFields({
  // All mutations require logging in
  ...wrapResolvers(Restrictions.LoggedIn, {
    // Resume
    createResume: Resume.get('$createOne'),
    updateResume: Resume.get('$updateOne'),
    removeResume: Resume.get('$removeOne'),
    // Account
    updateAccount: Account.get('$updateOne'),
    // Applicant
    createApplication: Applicant.get('$createOne'),
    updateApplication: Applicant.get('$updateOne'),
    removeApplication: Applicant.get('$removeOne'),

    // Employer-only mutations
    ...wrapResolvers(Restrictions.BusinessAccount, {
      // Job
      createJob: Job.get('$createOne'),
      updateJob: Job.get('$updateOne'),
      removeJob: Job.get('$removeOne'),
      // Business Profile
      createBusinessProfile: BusinessProfile.get('$createOne'),
      updateBusinessProfile: BusinessProfile.get('$updateOne'),
      removeBusinessProfile: BusinessProfile.get('$removeOne'),
      // Organization
      createOrganization: Organization.get('$createOne'),
      updateOrganization: Organization.get('$updateOne'),
      removeOrganization: Organization.get('$removeOne'),
    }),
  }),
});

export default GQC.buildSchema();
