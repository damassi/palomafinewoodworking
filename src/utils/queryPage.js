import { gql } from "@apollo/client";
import { client } from "../apolloClient";

export async function queryPage(pageKey) {
  const { data } = await client.query({
    query: gql`
      query Page {
        ${pageKey} {
          name
        }
      }
    `,
  });

  return {
    props: {
      [pageKey]: data[pageKey],
    },
  };
}
