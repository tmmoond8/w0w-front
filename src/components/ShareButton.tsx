import React from 'react';
import * as C from '@chakra-ui/react';
import copy from 'copy-to-clipboard';
import ga from 'src/libs/ga';
import { useRouter } from 'next/router';

interface Props extends C.ButtonProps {
  text: string;
  url: string;
}

export default function ShareButton({ text, url, children, ...props }: Props) {
  const router = useRouter();
  const toast = C.useToast();
  const handleClick = () => {
    console.log('router', router);
    ga.sendEvent('share', {
      url,
      path: router.asPath,
    });
    if (globalThis.navigator?.share) {
      globalThis.navigator.share({
        url,
        text,
      });
    } else {
      // pc 같은 플랫폼은 공유 기능이 없을 수 있음
      copy(url);
      toast({
        title: '주소를 복사했습니다.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };
  return (
    <C.Button
      w="100%"
      h="48px"
      borderRadius="12px"
      colorScheme="gray"
      variant="outline"
      color="#00000075"
      borderColor="#00000050"
      fontFamily="'Gamja Flower'"
      onClick={handleClick}
      flex="1"
      fontSize="18px"
      {...props}
    >
      {children}
    </C.Button>
  );
}
