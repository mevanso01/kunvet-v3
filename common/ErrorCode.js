// eslint-disable-next-line
import ErrorCodeInternal from 'static_error_code_internal';

const result = ErrorCodeInternal.codes;
const messages = ErrorCodeInternal.messages;

result.getMessage = (code, extraMessage = null) => {
  let message = messages[result.UnknownError];

  if (Object.prototype.hasOwnProperty.call(messages, code)) {
    message = messages[code];
  }

  if (extraMessage) {
    message += `: ${extraMessage}`;
  }

  return message;
};

export default result;
