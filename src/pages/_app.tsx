import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";

const DMSans = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={DMSans.className}>
      <Component {...pageProps} />
    </div>
  );
}
