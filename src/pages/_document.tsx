import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Gamja+Flower:400"
            rel="stylesheet"
          />
          <script
            id="ga-tag"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-2V7C7VZQ6C"
          ></script>
          <script
            id="G-2V7C7VZQ6C"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              if (window.dataLayer) {
                window.dataLayer.push(arguments);
              }
            }
            gtag('js', new Date());

            gtag('config', 'G-2V7C7VZQ6C', {
              page_path: window.location.pathname
            });
            `,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
