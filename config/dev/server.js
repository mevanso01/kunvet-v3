// Development server

import common from './common';

const config = {
  database: 'mongodb://localhost/kunvet-dev',
};

export default Object.assign(common, config);
