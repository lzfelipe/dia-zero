import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black" style={{ minHeight: "100vh" }}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
