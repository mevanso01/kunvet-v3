class DateHelper {
  static getExpiryDate(date, num = 30) {
    const expiryDate = new Date(date);
    expiryDate.setDate(expiryDate.getDate() + num);
    // console.log(num);
    // expiryDate.setMinutes(expiryDate.getMinutes() + 5);
    return expiryDate;
  }

  static getDifferenceInDays(first, second) {
    const timeDiff = second.getTime() - new Date(first).getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  }
}

export default DateHelper;
