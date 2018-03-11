import DateHelper from '@/utils/DateHelper';

class JobHelper {
  static isJobActive = ({ expiry_date: expiryDate, active }) => {
    const daysDiff = DateHelper.getDifferenceInDays(Date.now(), new Date(expiryDate));
    return !(daysDiff <= 0) && active; // daysDiff can be negative so this is goo
  }
  static isJobExpired = ({ expiry_date: expiryDate, active }) => {
    const daysDiff = DateHelper.getDifferenceInDays(Date.now(), new Date(expiryDate));
    return daysDiff <= 0 && active; // daysDiff can be negative so this is goo
  }
}

export default JobHelper;
