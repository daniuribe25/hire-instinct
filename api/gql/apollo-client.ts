import { ApolloClient, createHttpLink, DefaultOptions, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { NEXT_PUBLIC_API_EP } from "../../utils/env";
import storage, { AUTH_TOKEN } from "../../utils/storage";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: process.browser ? storage.get(AUTH_TOKEN) : '',
    },
  };
});

const httpLink = createHttpLink({ uri: NEXT_PUBLIC_API_EP });

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const apolloClient = new ApolloClient({
  ssrMode: typeof window === undefined,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  defaultOptions,
});

export default apolloClient;
