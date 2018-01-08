// Development server

import common from './common';

const config = {
  database: 'mongodb://localhost/kunvet-dev',
  mailFrom: 'Kunvet Dev Env <dev@kunvet.tld>',
  mailTransport: false,
};

export default Object.assign(common, config);
