import React from 'react';
import { useRouter } from 'next/router';

export default function LinkPage() {
  const router = useRouter();

  React.useEffect(() => {
    if (router.query.url) {
      globalThis.location.href = decodeURIComponent(router.query.url as string);
    }
  }, [router.query.url]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/');
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
}
