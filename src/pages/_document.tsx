import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Overpass:wght@300&family=Space+Grotesk:wght@300;400;700&display=swap"
            rel="stylesheet"
          />

          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>Programeiros.dev</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
