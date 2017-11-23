import composeWithMongoose from 'graphql-compose-mongoose';
import { GQC } from 'graphql-compose';
import Models from '../mongodb/Models';

// GraphQL types
const Ta = composeWithMongoose(Models.TempAccount);
const Job = composeWithMongoose(Models.Job);
const Resume = composeWithMongoose(Models.Resume);
const Account = composeWithMongoose(Models.Account);
const BusinessProfile = composeWithMongoose(Models.BusinessProfile);
const EmployeeProfile = composeWithMongoose(Models.EmployeeProfile);

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
  // Business Profile
  findBusinessProfile: BusinessProfile.get('$findOne'),
  findBusinessProfiles: BusinessProfile.get('$findMany'),
  // Employee Profile
  findEmployeeProfile: EmployeeProfile.get('$findOne'),
  findEmployeeProfiles: EmployeeProfile.get('$findMany'),
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
  // Business Profile
  createBusinessProfile: BusinessProfile.get('$createOne'),
  updateBusinessProfile: BusinessProfile.get('$updateOne'),
  removeBusinessProfile: BusinessProfile.get('$removeOne'),
  // Employee Profile
  createEmployeeProfile: EmployeeProfile.get('$createOne'),
  updateEmployeeProfile: EmployeeProfile.get('$updateOne'),
  removeEmployeeProfile: EmployeeProfile.get('$removeOne'),

  removeTempAccount: Ta.get('$removeOne'),
});

export default GQC.buildSchema();
