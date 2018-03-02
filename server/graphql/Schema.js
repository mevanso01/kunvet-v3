import composeWithMongoose from 'graphql-compose-mongoose';
import { GQC } from 'graphql-compose';
import Models from '../mongodb/Models';

// GraphQL types
const Ta = composeWithMongoose(Models.TempAccount);
const Job = composeWithMongoose(Models.Job);
const Resume = composeWithMongoose(Models.Resume);
const Account = composeWithMongoose(Models.Account);
const Applicant = composeWithMongoose(Models.Applicant);
const BusinessProfile = composeWithMongoose(Models.BusinessProfile);
const Organization = composeWithMongoose(Models.Organization);

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
  //
  findVCode: Ta.get('$findOne'),
});

// Root mutation fields
GQC.rootMutation().addFields({
  // Job
  createJob: Job.get('$createOne'),
  updateJob: Job.get('$updateOne'),
  removeJob: Job.get('$removeOne'),
  // Resume
  createResume: Resume.get('$createOne'),
  updateResume: Resume.get('$updateOne'),
  removeResume: Resume.get('$removeOne'),
  // Account
  createAccount: Account.get('$createOne'),
  updateAccount: Account.get('$updateOne'),
  removeAccount: Account.get('$removeOne'),
  // Applicant
  createApplication: Applicant.get('$createOne'),
  updateApplication: Applicant.get('$updateOne'),
  removeApplication: Applicant.get('$removeOne'),
  // Business Profile
  createBusinessProfile: BusinessProfile.get('$createOne'),
  updateBusinessProfile: BusinessProfile.get('$updateOne'),
  removeBusinessProfile: BusinessProfile.get('$removeOne'),
  // Organization
  createOrganization: Organization.get('$createOne'),
  updateOrganization: Organization.get('$updateOne'),
  removeOrganization: Organization.get('$removeOne'),

  removeTempAccount: Ta.get('$removeOne'),
});

export default GQC.buildSchema();
