// Koa
import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaBody from 'koa-bodyparser';

// GraphQL and Apollo
import { graphqlKoa } from 'apollo-server-koa';

// Our stuff
import Schema from '../graphql/Schema';

const app = new Koa();
const router = new KoaRouter();

// GraphQL endpoint
router.post('/graphql', KoaBody(), graphqlKoa({
  schema: Schema,
}));
router.get('/graphql', graphqlKoa({
  schema: Schema,
}));

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
