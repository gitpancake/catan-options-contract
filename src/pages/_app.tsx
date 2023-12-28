import type { AppProps } from "next/app";
import Head from "next/head";
import "~/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Catan Options Terminal</title>
        <meta charSet="UTF-8" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Picture yourself in the era of discoveries: after a long voyage of great deprivation, your ships have finally reached the coast of an uncharted island. Its name shall be Catan!"
        />
        <meta property="og:title" content="Catan Options Terminal" />
        <meta property="og:site_name" content="Catan Options Terminal" />
        <meta
          property="og:description"
          content="Picture yourself in the era of discoveries: after a long voyage of great deprivation, your ships have finally reached the coast of an uncharted island. Its name shall be Catan!"
        />
        <meta property="og:image" content="https://cdn.shopify.com/s/files/1/0581/7171/9848/files/catan_banner.jpg?v=1631079804" />
        <meta property="og:image:secure_url" content="https://cdn.shopify.com/s/files/1/0581/7171/9848/files/catan_banner.jpg?v=1631079804" />
        <meta property="og:url" content={`https://catan.henrypye.xyz`} />
        <meta property="og:image:width" content="708" />
        <meta property="og:image:height" content="372" />
        <meta name="twitter:title" content="Catan Options Terminal" />
        <meta name="twitter:image" content="https://cdn.shopify.com/s/files/1/0581/7171/9848/files/catan_banner.jpg?v=1631079804" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Picture yourself in the era of discoveries: after a long voyage of great deprivation, your ships have finally reached the coast of an uncharted island. Its name shall be Catan!"
        />
        <meta name="twitter:url" content={`https://catan.henrypye.xyz`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
