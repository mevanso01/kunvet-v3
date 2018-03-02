// Koa
import Koa from 'koa';
import KoaStatic from 'koa-static';

const app = new Koa();

const clientPath = process.env.CLIENT_PATH;
app.use(KoaStatic(clientPath));

export default app;
