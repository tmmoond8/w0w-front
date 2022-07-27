import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Gamja+Flower:400"
            rel="stylesheet"
          />
          <Script
            id="ga-tag"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-2V7C7VZQ6C"
          ></Script>
          <Script
            id="G-2V7C7VZQ6C"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              if (window.dataLayer) {
                window.dataLayer.push(arguments);
              }
            }
            gtag('js', new Date());

            gtag('config', 'G-2V7C7VZQ6C');
            `,
            }}
          ></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
