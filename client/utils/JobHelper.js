import DateHelper from './DateHelper';

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
  static getFullAddress(job) {
    if (!job) {
      return '';
    }
    let address = '';
    address = job.address;
    if (job.address2) {
      address = `${address} ${job.address2}`;
    }
    if (job.city) {
      address = `${address}, ${job.city}`;
    }
    if (job.state) {
      address = `${address}, ${job.state}`;
    }
    return address;
  }
}

export default JobHelper;
