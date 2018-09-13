// eslint-disable-next-line
import ErrorCodeInternal from 'static_error_code_internal';

const result = ErrorCodeInternal.codes;
const messages = ErrorCodeInternal.messages;

result.getMessage = (code) => {
  if (Object.prototype.hasOwnProperty.call(messages, code)) {
    return messages[code];
  }

  return messages[result.UnknownError];
};

export default result;
