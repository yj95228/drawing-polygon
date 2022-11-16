import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import 'styles/reset.css';
import 'styles/index.css';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='지도 위 폴리곤 그리기 도구' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://drawing-polygon.netlify.app/'
        />
        <meta property='og:title' content='Polygon Tool' />
        <meta property='og:image' content='og_image.png' />
        <meta property='og:description' content='지도 위 폴리곤 그리기 도구' />
        <meta property='og:site_name' content='Polygon Tool' />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:image:width' content='800' />
        <meta property='og:image:height' content='400' />
        <link rel='icon' href='polygon-matic-logo.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <title>지도 위 폴리곤 그리기</title>
      </Head>
      <Script
        strategy='beforeInteractive'
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
      <Component {...pageProps} />
    </>
  );
}
