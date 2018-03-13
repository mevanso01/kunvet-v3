import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import Config from 'config';

console.log(`${Config.get('serverUrl')}/srv/graphql`);

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${Config.get('serverUrl')}/srv/graphql`,
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
