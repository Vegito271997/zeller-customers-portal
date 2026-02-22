import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_APPSYNC_ENDPOINT,
    headers: {
      'x-api-key': import.meta.env.VITE_APPSYNC_API_KEY,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
