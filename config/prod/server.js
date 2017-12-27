// Production server

import common from './common';

const config = {
  database: 'mongodb://localhost/kunvet-prod',
  mailFrom: 'Kunvet Notifications <notifications@kunvet.com>',
  mailTransport: false,
};

export default Object.assign(common, config);
