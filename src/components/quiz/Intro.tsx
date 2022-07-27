import React from 'react';
import NextImage from 'next/image';
import { Buttons, Logo } from 'src/components';
import mainImage from 'src/assets/main.png';
import * as C from '@chakra-ui/react';

export default function Intro({ next }: { next: () => void }) {
  return (
    <C.Flex as="div" flexDirection="column" position="relative">
      <C.Box
        maxW="500px"
        height="auto"
        margin="0 auto"
        position="relative"
        top="-40px"
        __css={{
          img: {
            top: '40px !important',
          },
        }}
      >
        <NextImage src={mainImage} width="500px" height="670px" />
      </C.Box>
      <C.Box
        position="absolute"
        p="20px 24px 0"
        w="100%"
        bottom="0"
        bgColor="white"
        borderTopLeftRadius="8px"
        borderTopRightRadius="8px"
      >
        <C.Center>
          <Logo width="96px" />
        </C.Center>
        <Buttons.CTA w="100%" mt="8px" onClick={next}>
          게임 시작 하기
        </Buttons.CTA>
        <C.Button
          colorScheme="gray"
          borderColor="rgba(0,0,0, 0.3)"
          w="100%"
          mt="8px"
          variant="outline"
          h="48px"
          borderRadius="12px"
        >
          친구에게 공유하기
        </C.Button>
      </C.Box>
    </C.Flex>
  );
}
