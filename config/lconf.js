import config from './config.json';


export default {
  dev: {
    client: Object.assign({}, config.dev.common, config.dev.client),
    server: Object.assign({}, config.dev.common, config.dev.server),
  },
  prod: {
    client: Object.assign({}, config.prod.common, config.prod.client),
    server: Object.assign({}, config.prod.common, config.prod.server),
  },
};
