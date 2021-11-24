import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black" style={{ width: "100%" }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
