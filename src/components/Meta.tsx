import React from 'react';
import Head from 'next/head';
import ENVS from 'src/libs/envs';

interface Props {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function Meta({
  title = '우영우 게임',
  description = '똑바로 읽어도 거꾸로 읽어도 우영우 게임',
  image = 'https://w.namu.la/s/d519bbe427905a130fcdc33f50b8fc510ad4f26a80f13c1acf7bec38cc0ad365c84ce241e346b840c399cc9cc9dd7c1aa081ee6d2f821bdf91946425962be1ac59c82845031bb1e525270783ad5d07f807432d540ceb27a88d14d121c5e9bd8e',
  url = ENVS.NEXT_PUBLIC_URL,
}: Props) {
  let metaFavicon = '/favicon.ico';

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Tamm" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="google-site-verification"
        content="PIRsHmgoZCLzu2POg5y_DUts70ScOpV2oLVfpIpFmYg"
      />
      <link rel="apple-touch-icon" href={metaFavicon} />
      <link rel="apple-touch-icon" sizes="64x64" href={metaFavicon} />
      <link rel="shortcut icon" href={metaFavicon} />
    </Head>
  );
}
