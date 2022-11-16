import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Fredoka:wght@300;600&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <ins
              className='kakao_ad_area'
              style={{ display: 'none' }}
              data-ad-unit='DAN-YHPcTqwCBzBGGLEv'
              data-ad-width='728'
              data-ad-height='90'
            ></ins>
            <script
              type='text/javascript'
              src='//t1.daumcdn.net/kas/static/ba.min.js'
              async
            ></script>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
