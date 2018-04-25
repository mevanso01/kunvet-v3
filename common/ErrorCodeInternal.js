const errors = [
  ['Success', 'Successful'],
  ['UnknownError', 'An unknown error occurred'],
  ['InternalError', 'An internal error occurred'],
  ['RateLimit', 'Job search circuitry hot! Wait for cooldown to get another job'],
  ['BadRequest', 'Bad request. Naughty kid.'],
  ['UnsupportedFileType', 'Unsupported file type'],
];

const result = {
  codes: {},
  messages: {},
};

let code = 0;
for (const error of errors) {
  result.codes[error[0]] = code;
  result.messages[code] = error[1];
  code += 1;
}

module.exports = result;
