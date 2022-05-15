import { Box } from "@artsy/palette";
import type { NextPage } from "next";
import Head from "next/head";
import { queryPage } from "utils/queryPage";

const Home: NextPage = (props) => {
  return (
    <Box>
      <Box>{/* <Image src={props.data.image.url} /> */}</Box>
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await queryPage("home");
  return data;
}
