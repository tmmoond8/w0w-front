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
            id="gtag"
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WLHNDGH');
            `,
            }}
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
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WLHNDGH"
              height="0"
              width="0"
              style={{
                display: 'none',
                visibility: 'hidden',
              }}
            ></iframe>
          </noscript>
        </body>
      </Html>
    );
  }
}
