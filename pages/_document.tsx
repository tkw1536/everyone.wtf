import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  

  render() {
    return (
      <Html lang="en" itemScope itemType="http://schema.org/WebPage" prefix="og: http://ogp.me/ns#">
        <Head>
          <meta charSet="utf-8" />
          <script async src="https://inform.everyone.wtf/legal.min.js?small,fixed,noborder" data-site-id="2facae70-5fd4-4499-876f-a32a0c0155d3"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};
