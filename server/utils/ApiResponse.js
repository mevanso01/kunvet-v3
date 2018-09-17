import ErrorCode from '#/ErrorCode';

export default (errorCode = ErrorCode.Success, message = '') => JSON.stringify({
  success: errorCode === ErrorCode.Success,
  errorCode,
  message: message || ErrorCode.getMessage(errorCode),
});
