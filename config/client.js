// Client

import common from './common';
import prod from './prod/client';
import dev from './dev/client';
import lconf from './lconf';

const config = {
};

let merged = Object.assign(common, config);

// Merge environment-specific configurations
if (process.env.NODE_ENV === 'production') {
  merged = Object.assign(merged, prod);
  merged = Object.assign(merged, lconf.prod.client);
} else {
  merged = Object.assign(merged, dev);
  merged = Object.assign(merged, lconf.dev.client);
}

const exported = merged;
export default exported;
