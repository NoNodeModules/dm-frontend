import "styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "contexts/useAuth";
import Head from 'next/head'
function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <AuthProvider appProps={props}>
      <Head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
