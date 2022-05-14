import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Theme, injectGlobalStyles } from "@artsy/palette";
import { Layout } from "../components/Layout";

const { GlobalStyles } = injectGlobalStyles(`
  /* overrides and additions */
`);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // @ts-ignore
    <Theme theme="v3">
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}
