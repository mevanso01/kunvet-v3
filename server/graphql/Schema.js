import composeWithMongoose from 'graphql-compose-mongoose';
import uuidv1 from 'uuid/v1';
import { GQC, Resolver } from 'graphql-compose';
import Logger from 'winston';
import Files from '@/utils/Files';
import EmailFunctions from '@/utils/EmailFunctions';
import Models from '../mongodb/Models';
import Restrictions from './Restrictions';
// GraphQL types
const Job = composeWithMongoose(Models.Job);
const Account = composeWithMongoose(Models.Account);
const Applicant = composeWithMongoose(Models.Applicant);
const Organization = composeWithMongoose(Models.Organization);
const HDYH = composeWithMongoose(Models.HDYH);
const Filters = composeWithMongoose(Models.Filters);

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

const degrees = {
  none: 'None',
  high_school: 'High school',
  pursuing_associate: 'Pursuing Associate\'s Degree',
  associates: 'Associate\'s Degree',
  pursuing_bachelor: 'Pursuing Bachelor\'s Degree',
  bachelors: 'Bachelor\'s Degree',
  pursuing_master: 'Pursuing Master\'s Degree',
  masters: 'Master\'s Degree',
  pursuing_phd: 'Pursuing PhD Degree',
  phd: 'PhD degree',
};

async function sendNewApplicationNotification(req, next) {
  const user = req.context.user;
  let job = null;
  let employer = null;

  req.args.record.tracking_token = uuidv1();

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

  var degree = degrees[req.args.record.degree];
  if (degree === 'None') {
    degree = null;
  }

  const results = await next(req);

  const locals = {
    replyTo: user.email,
    name: `${user.firstname} ${user.lastname}`,
    fname: user.firstname,
    jobname: job.title,
    employername: employer.firstname,
    email: user.email,
    degree: degree,
    school: req.args.record.school,
    message: req.args.record.applicant_message,
    trackingToken: req.args.record.tracking_token,
    appId: results.record._id,
    attachments: [
    ],
  };

  if (req.args.record.resumes) {
    for (const resume of req.args.record.resumes) {
      const fileSlot = await Files.get(resume.filename);
      const backend = Files.getBackend(fileSlot.backend);
      const attachment = await backend.createAttachment(fileSlot);

      locals.attachments.push(attachment);
    }
  }

  const templateObject = {
    email: employer.email,
    status: 'application-created',
    locals: locals,
  };

  EmailFunctions.sendApplicantInfo(templateObject);
  try {
    employer.notifications.push({
      text: `New applicant: ${user.firstname} ${user.lastname}`, // Important: change code in applicants.vue before removing
      route: '/applicants',
      notification_type: 'application',
      date: Date.now,
    });
    employer.save();
  } catch (e) {
    Logger.error(e);
    // throw Error('Employer could not be notified');
  }

  return results;
}

// Redact fields from client
Account.removeField(['password', 'hash', 'salt', 'is_developer']);

// Root query fields
GQC.rootQuery().addFields({
  // Job
  findJob: Job.get('$findOne'),
  findJobs: Job.get('$findMany'),
  // Filters
  findAvailableFilters: Filters.get('$findOne'),

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
      ...wrapResolvers(Restrictions.UploadJobToAlgolia, {
        createJob: Job.get('$createOne'),
      }),
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
      Restrictions.UploadJobToAlgolia,
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
