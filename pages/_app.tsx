import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Header from "../src/components/Header";
import { GlobalStyle } from "../theme/GlobalStyle";
import theme from "../theme/GlobalTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>Reis Design</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
