import { Box, Image } from "@artsy/palette";
import type { NextPage } from "next";
import Head from "next/head";
import { queryPage } from "utils/queryPage";

const Home: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Paloma Fine Woodworking | Chimacum, WA</title>
      </Head>
      <Box>
        <Box>
          <Image src={props.imagesData[0].attachments[0].url} width="100%" />
        </Box>
        <Box>
          <Image src={props.imagesData[1].attachments[0].url} width="100%" />
        </Box>
      </Box>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const imagesData = await queryPage(
    "images",
    `
    title
    description
    attachments
  `
  );
  const contactData = await queryPage(
    "contact",
    `
    email
    phone
  `
  );
  return {
    props: {
      imagesData,
      contactData,
    },
  };
}
