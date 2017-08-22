// Server

import common from './common';
import prod from './prod/server';
import dev from './dev/server';

const config = {
  defaultServerPort: 3000,
};

let merged = Object.assign(common, config);

// Merge environment-specific configurations
if (process.env.NODE_ENV === 'production') {
  merged = Object.assign(merged, prod);
} else {
  merged = Object.assign(merged, dev);
}

const exported = merged;
export default exported;
