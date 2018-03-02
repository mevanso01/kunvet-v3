// Server

import common from './common';
import prod from './prod/server';
import dev from './dev/server';
import lconf from './lconf';

const config = {
  defaultServerPort: 3000,
};

let merged = Object.assign(common, config);

// Merge environment-specific configurations
if (process.env.NODE_ENV === 'production') {
  merged = Object.assign(merged, prod);
  merged = Object.assign(merged, lconf.prod.server);
} else {
  merged = Object.assign(merged, dev);
  merged = Object.assign(merged, lconf.dev.server);
}

const exported = merged;
export default exported;
