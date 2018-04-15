import Cors from '@koa/cors';
import Config from 'config';

const allowedOrigins = Config.get('private.cors.allowedOrigins');

export default Cors({
  credentials: true,
  origin: (ctx) => {
    // We don't want to expose the complete list of allowed origins
    const requestOrigin = ctx.get('Origin');
    if (allowedOrigins.includes(requestOrigin)) {
      return requestOrigin;
    }
    return '';
  },
});
