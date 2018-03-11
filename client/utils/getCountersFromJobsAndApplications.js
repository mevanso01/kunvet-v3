// Trying to deal with duplicate code between business / account.
import ApplicantHelper from '@/utils/ApplicantHelper';
import JobHelper from '@/utils/JobHelper';

const getCountersFromJobsAndApplications = (jobs, applications) => {
  const jobsActiveLength = jobs.filter(job => job.active).length;
  const counters = {
    jobs: {
      unfinished: jobs.length - jobsActiveLength,
      active: jobsActiveLength,
      expired: jobs.filter(JobHelper.isJobExpired).length,
    },
    applications: {
      unread: applications.filter(({ status }) => status === 'submitted').length,
      applied: applications.length,
      expired: applications.filter(ApplicantHelper.isApplicantAboutToExpire).length,
    },
  };

  return counters;
};

export default getCountersFromJobsAndApplications;
