// Trying to deal with duplicate code between business / account.
const getCountersFromJobsAndApplications = (jobs, applications) => {
  const jobsActiveLength = jobs.filter(job => job.active).length;
  const counters = {
    jobs: {
      unfinished: jobs.length - jobsActiveLength,
      active: jobsActiveLength,
      expired: jobs.filter(job => job.expired).length,
    },
    applications: {
      unread: applications.filter(application => application.unread).length,
      applied: applications.length,
      expired: applications.filter(application => application.expired).length,
    },
  };
  return counters;
};

export default getCountersFromJobsAndApplications;
