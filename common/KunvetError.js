import ErrorCode from './ErrorCode';

export default class KunvetError extends Error {
  constructor(responseObj, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, KunvetError);
    }

    this._responseObj = responseObj;
  }

  get errorCode() {
    return this._responseObj.errorCode;
  }

  get message() {
    return ErrorCode.getMessage(this.errorCode);
  }
}
