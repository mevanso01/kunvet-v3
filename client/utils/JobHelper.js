import DateHelper from '@/utils/DateHelper';

class JobHelper {
  static isJobActive({ expiry_date: expiryDate, active, is_deleted: isDeleted }) {
    let daysDiff = DateHelper.getDifferenceInDays(Date.now(), new Date(expiryDate));
    if (!daysDiff) {
      daysDiff = 999;
    }
    return daysDiff > 0 && active && !isDeleted;
  }
  static isJobExpired(job) {
    if (job.expiry_date) {
      const daysDiff = DateHelper.getDifferenceInDays(Date.now(), new Date(job.expiry_date));
      return daysDiff <= 0 && !job.active; // daysDiff can be negative so this is good
    }
    return false;
  }
}

export default JobHelper;
