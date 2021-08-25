import Head from "next/head";
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>João Pedro Henrique</title>
        <meta
          name="description"
          content="Currently, a Computer Science student @UFPE"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
