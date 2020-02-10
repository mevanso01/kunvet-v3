// eslint-disable-next-line
import ErrorCodeInternal from 'static_error_code_internal';

const result = ErrorCodeInternal.codes;
const messages = ErrorCodeInternal.messages;

result.getMessage = (code) => {
  let message = messages[result.UnknownError];

  if (Object.prototype.hasOwnProperty.call(messages, code)) {
    message = messages[code];
  }

  return message;
};

export default result;
