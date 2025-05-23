import { Navbar } from "components/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex-grow mt-20 sm:mt-10">
      <Head>
        <script src="https://cdn.tailwindcss.com?plugins=typography" />
        <meta name="google-site-verification" content="flm7Rj7-NcWtbgB36OsVnpo8ZxXXqIYKJzvWm9cyNhQ" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
