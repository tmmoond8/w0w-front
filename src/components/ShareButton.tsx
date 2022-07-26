import React from 'react';
import * as C from '@chakra-ui/react';
import copy from 'copy-to-clipboard';

interface Props {
  children: React.ReactNode;
  text: string;
  url: string;
}

export default function ShareButton({ text, url, children }: Props) {
  const toast = C.useToast();
  const handleClick = () => {
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
      onClick={handleClick}
      bgColor="#f79aba"
      _hover={{
        filter: 'brightness(1.1)',
      }}
      _active={{
        filter: 'brightness(0.9)',
      }}
      color="white"
      flex="1"
      fontSize="14px"
    >
      {children}
    </C.Button>
  );
}
