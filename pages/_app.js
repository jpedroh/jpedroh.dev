import Head from "next/head";
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>João Pedro Henrique</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
