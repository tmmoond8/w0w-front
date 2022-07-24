import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  url?: string;
  tags?: string[];
  image?: string;
}

export default function TlogHead({
  title,
  description,
  tags,
  image,
  url = 'https://https://w0w.tammolo.com',
}: Props) {
  const metaTitle = title ? `${title} - Tlog` : 'Tlog';
  let metaDescription = description || "Tamm's dev log";
  const metaImage =
    image ||
    'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632454834/tlog/Tlog_uwiiop.png';
  let metaFavicon = '/favicon.ico';
  if (tags && tags.length > 0) {
    metaDescription += ` (${tags.join(', ')})`;
  }
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Tamm" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
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
