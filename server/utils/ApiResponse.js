import Logger from '@/Logger';
import ErrorCode from '#/ErrorCode';

/*
export default (errorCode = ErrorCode.Success, message = '', ctx) => {
  const data = JSON.stringify({
    success: errorCode === ErrorCode.Success,
    errorCode,
    message: message || ErrorCode.getMessage(errorCode),
  });

  // FIXME: Add Sentry integration

  return data;
};
*/

export default class ApiResponse {
  constructor(errorCode = ErrorCode.Success, message = '', ctx = null) {
    this.errorCode = errorCode;
    this.message = message;
    this.ctx = ctx;
    this.logging = true;
  }

  send(ctx = null) {
    const rc = this._getContext(ctx);
    if (!rc) {
      throw Error('A context must be provided');
    }

    rc.body = this.serialize(ctx);
  }

  serialize(ctx) {
    this._logError(ctx);
    return JSON.stringify(this._getObject());
  }

  toString() {
    return this.serialize();
  }

  _logError(ctx) {
    if (!this.logging) return;

    const rc = this._getContext(ctx);

    if (this.errorCode !== ErrorCode.Success) {
      const obj = this._getObject();
      if (rc) {
        if (rc.isAuthenticated() && rc.state.user) {
          obj.user = {
            _id: rc.state.user._id,
            email: rc.state.user.email,
          };
        }
      }
      Logger.warn(JSON.stringify(obj));
    }
  }

  _getObject() {
    return {
      success: this.errorCode === ErrorCode.Success,
      errorCode: this.errorCode,
      message: this.message || ErrorCode.getMessage(this.errorCode),
    };
  }

  _getContext(ctx = null) {
    return ctx || this.ctx;
  }
}
