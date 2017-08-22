// Production server

import common from './common';

const config = {
  database: 'mongodb://localhost/kunvet-prod',
};

export default Object.assign(common, config);
