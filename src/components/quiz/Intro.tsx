import React from 'react';
import NextImage from 'next/image';
import { Buttons } from 'src/components';
import mainImage from 'src/assets/main.jpeg';
import * as C from '@chakra-ui/react';

export default function Intro({ next }: { next: () => void }) {
  return (
    <C.Flex as="div" flexDirection="column" position="relative">
      <C.Box maxW="400px" height="auto" margin="0 auto">
        <NextImage src={mainImage} width="400px" height="573px" />
      </C.Box>
      <Buttons.CTA
        colorScheme="pink"
        position="absolute"
        left="0"
        right="0"
        top="50%"
        maxW="300px"
        m="0 auto"
        onClick={next}
      >
        게임 시작 하기
      </Buttons.CTA>
    </C.Flex>
  );
}
