import ErrorCode from '#/ErrorCode';

export default (errorCode = ErrorCode.Success, message = '') => {
  const data = JSON.stringify({
    success: errorCode === ErrorCode.Success,
    errorCode,
    message: message || ErrorCode.getMessage(errorCode),
  });

  // FIXME: Add Sentry integration

  return data;
};
