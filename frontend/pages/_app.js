import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-4QWLCVP92X"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4QWLCVP92X', {
        page_path: window.location.pathname,
        });
        `,
        }}
      />
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}

export default MyApp;
