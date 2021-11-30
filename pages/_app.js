import "../styles/styles.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black" style={{ width: "100%" }}>
      <Head>
        <title>DIA ZERO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
