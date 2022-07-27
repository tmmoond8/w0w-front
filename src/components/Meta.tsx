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
  image = '/og-image.png',
  url = ENVS.NEXT_PUBLIC_URL,
}: Props) {
  const favicon = '/favicon.ico';

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
      <link rel="apple-touch-icon" href={favicon} />
      <link rel="apple-touch-icon" sizes="64x64" href={favicon} />
      <link rel="shortcut icon" href={favicon} />
    </Head>
  );
}
