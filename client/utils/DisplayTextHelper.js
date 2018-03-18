// weird name
// This class should help translate db logic into text to be displayed to users.
import StringHelper from './StringHelper';
import Sanitizers from './Sanitizers';

class DisplayTextHelper {
  static getJobTypeString(jobTypes) {
    if (!jobTypes) return '';
    if (jobTypes.length === 0) return 'Unknown'; // probably unnecessary
    return StringHelper.listToSlashString(Sanitizers.sanitizeJobTypes(jobTypes));
    // return this.sanitizeTypes(jobTypes);
  }

  static getSalaryString(job) {
    if (job.pay_type !== 'paid') {
      return job.pay_type;
    }
    return `$${job.salary} ${job.pay_denomination}`;
  }

  static getMainJobInfo(job) {
    const jobType = this.getJobTypeString(job.type);
    const jobType2 = this.getJobTypeString(job.type2);
    const salary = StringHelper.capitalize(this.getSalaryString(job));
    let result = '';
    if (jobType) result += jobType;
    if (jobType && jobType2) result += ` • ${jobType2}`;
    if (salary) result += ` • ${salary}`;
    return result;
  }
}

export default DisplayTextHelper;
