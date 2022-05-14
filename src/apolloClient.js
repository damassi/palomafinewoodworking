import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.baseql.com/airtable/graphql/appvCRVM8W1UGN7O6",
  cache: new InMemoryCache(),
});
