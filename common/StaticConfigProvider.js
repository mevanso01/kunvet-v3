// eslint-disable-next-line
import staticConfig from 'static_config';
import has from 'lodash/has';
import get from 'lodash/get';

let config = Object.assign({}, staticConfig);

if (typeof process !== 'undefined') {
  // Server
  if (process.env.KUNVET_CONFIG) {
    config = JSON.parse(process.env.KUNVET_CONFIG);
    console.log('Config overridden by environment variable');
  }
}

export default {
  has(key) {
    return has(config, key);
  },
  get(key) {
    return get(config, key);
  },
};
