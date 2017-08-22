import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import Config from 'config';

const client = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    // FIXME: Clean up config
    uri: `${Config.serverUrl}/srv/graphql`,
  }),
  connectToDevTools: true,
});

export default client;
