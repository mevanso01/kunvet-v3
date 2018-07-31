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
    console.log(job);
    // const daysDiff = DateHelper.getDifferenceInDays(Date.now(), new Date(expiryDate));
    // return daysDiff <= 0 && !active; // daysDiff can be negative so this is good
    return false;
  }
}

export default JobHelper;
