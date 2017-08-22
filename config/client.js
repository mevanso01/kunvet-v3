// Client

import common from './common';
import prod from './prod/client';
import dev from './dev/client';

const config = {
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
