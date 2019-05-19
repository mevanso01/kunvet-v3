import composeWithMongoose from 'graphql-compose-mongoose';
import uuidv1 from 'uuid/v1';
import { GQC, Resolver } from 'graphql-compose';
import Logger from 'winston';
import Files from '@/utils/Files';
import Mailer from '@/utils/Mailer';
// import EmailFunctions from '@/utils/EmailFunctions';
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

  const rejectUrl = `mailto:${user.email}?subject=Response%20to%20your%20application%20for%20${encodeURIComponent(job.title)}&body=Dear%20${encodeURIComponent(user.firstname)}%2C%0A%0AThank%20you%20for%20applying%20to%20our%20job%2C%20${encodeURIComponent(job.title)}%21%20We%20received%20your%20application%20via%20Kunvet.%0A%0AWhile%20your%20skills%20and%20background%20are%20impressive%2C%20after%20assessing%20all%20of%20the%20candidates%20that%20came%20in%20for%20this%20position%2C%20we%20have%20decided%20to%20proceed%20with%20other%20applicants%20who%20more%20closely%20fit%20our%20needs%20at%20this%20time.%0A%0AWe%20wish%20you%20success%20in%20your%20job%20search%20and%20future%20career.%0A%0ASincerely%2C%0A${encodeURIComponent(employer.firstname)}%20${encodeURIComponent(employer.lastname)}`;

  const replyUrl = `mailto:${user.email}?subject=Response%20to%20your%20application%20for%20${encodeURIComponent(job.title)}&body=Hi%20${encodeURIComponent(user.firstname)}%2C%0A%0A%0A%0ABest%20Regards%2C%0A${encodeURIComponent(employer.firstname)}%20${encodeURIComponent(employer.lastname)}`;

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
    rejectUrl: rejectUrl,
    replyUrl: replyUrl,
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

  // const templateObject = {
  //   email: employer.email,
  //   status: 'application-created',
  //   locals: locals,
  // };
  // EmailFunctions.sendApplicantInfo(templateObject);
  try {
    const mailer = new Mailer();
    await mailer.sendTemplate(
      employer.email,
      'application-created',
      locals,
    );
    Logger.info(`Sent application created email to ${employer.email}`);
  } catch (e) {
    Logger.info(`Failed to send application created email to ${employer.email}`);
    Logger.error(e);
    // throw Error('Employer could not be emailed');
  }
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
