class DateHelper {
  static getExpiryDate(date) {
    const expiryDate = new Date(date);
    expiryDate.setDate(expiryDate.getDate() + 30);
    return expiryDate;
  }

  static getDifferenceInDays(first, second) {
    const timeDiff = second.getTime() - new Date(first).getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  }
}

export default DateHelper;
