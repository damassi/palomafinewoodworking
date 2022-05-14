import { Box } from "@artsy/palette";
import type { NextPage } from "next";
import Head from "next/head";
import { queryPage } from "utils/queryPage";

const Home: NextPage = (props) => {
  console.log(props);
  return <Box>Home</Box>;
};

export default Home;

export async function getStaticProps() {
  const data = await queryPage("home");
  return data;
}
