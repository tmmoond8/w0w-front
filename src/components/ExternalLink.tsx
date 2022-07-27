import * as C from '@chakra-ui/react';
import ENVS from 'src/libs/envs';

interface Props extends C.BoxProps {
  url: string;
  children: React.ReactNode;
}

export default function ExternalLink({ url, children, ...props }: Props) {
  return (
    <C.Box
      {...props}
      __css={{
        '& > a': {
          display: 'block',
          width: '100%',
          height: '100%',
        },
      }}
      m="0 !important"
    >
      <a
        href={`${ENVS.NEXT_PUBLIC_URL}/l?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </C.Box>
  );
}
