// Trying to deal with duplicate code between business / account.
import ApplicantHelper from '@/utils/ApplicantHelper';

const getCountersFromJobsAndApplications = (jobs, applications) => {
  const jobsActiveLength = jobs.filter(job => job.active).length;
  const counters = {
    jobs: {
      unfinished: jobs.length - jobsActiveLength,
      active: jobsActiveLength,
      expired: jobs.filter(job => job.expired).length,
    },
    applications: {
      unread: applications.filter(({ status }) => status === 'submitted').length,
      applied: applications.length,
      expired: applications.filter(ApplicantHelper.isApplicantExpired).length,
    },
  };

  return counters;
};

export default getCountersFromJobsAndApplications;
