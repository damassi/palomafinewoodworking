import { gql } from "@apollo/client";
import { client } from "../apolloClient";

export async function queryPage(pageKey, fields) {
  const { data } = await client.query({
    query: gql`
      query Page {
        ${pageKey} {
          ${fields}
        }
      }
    `,
  });

  return data[pageKey];
}
