import React from 'react';
import NextImage from 'next/image';
import { Buttons } from 'src/components';
import mainImage from 'src/assets/main.jpeg';
import * as C from '@chakra-ui/react';

export default function Intro({ next }: { next: () => void }) {
  return (
    <C.Flex as="div" flexDirection="column" position="relative">
      <C.Box
        maxW="400px"
        height="auto"
        margin="0 auto"
        position="relative"
        top="-40px"
      >
        <NextImage src={mainImage} width="400px" height="573px" />
      </C.Box>
      <C.Box position="absolute" w="100%" top="40%">
        <Buttons.CTA
          w="calc(100% - 80px)"
          colorScheme="pink"
          onClick={next}
          mx="40px"
        >
          게임 시작 하기
        </Buttons.CTA>
        <C.Text
          color="white"
          fontWeight={700}
          mt="32px"
          bg="rgba(40, 40, 40, 0.5)"
          w="400px"
          textAlign="center"
        >
          우영우 게임은 상업성이 없는 팬 게임 입니다.
        </C.Text>
      </C.Box>
    </C.Flex>
  );
}
