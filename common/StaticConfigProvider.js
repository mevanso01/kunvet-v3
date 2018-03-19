// eslint-disable-next-line
import staticConfig from 'static_config';
import has from 'lodash/has';
import get from 'lodash/get';

export default {
  has(key) {
    return has(staticConfig, key);
  },
  get(key) {
    return get(staticConfig, key);
  },
};
