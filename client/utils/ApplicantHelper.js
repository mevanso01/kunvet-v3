import DateHelper from '@/utils/DateHelper';

class ApplicantHelper {
  static isApplicantExpired({ expiry_date: expiryDate }) {
    const daysDiff = DateHelper.getDifferenceInDays(Date.now(), new Date(expiryDate));
    return daysDiff <= 0; // daysDiff can be negative so this is good
  }


  static isApplicantAboutToExpire({ expiry_date: expiryDate }) {
    const daysDiff = DateHelper.getDifferenceInDays(Date.now(), new Date(expiryDate));
    return daysDiff >= 0 && daysDiff <= 5;
  }
}

export default ApplicantHelper;
