import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import Head from "next/head";

const DMSans = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={DMSans.className}>
      <Head>
        <meta
          name="description"
          content="Portfolio de Lucas Pavanelli Navarro dos Reis"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
