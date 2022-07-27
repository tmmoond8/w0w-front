import React from 'react';
import NextImage from 'next/image';
import { Buttons, Logo, ShareButton } from 'src/components';
import mainImage from 'src/assets/main.png';
import * as C from '@chakra-ui/react';

export default function Intro({
  next,
  url,
}: {
  url: string;
  next: () => void;
}) {
  return (
    <C.Flex
      as="div"
      h="100%"
      flexDirection="column"
      position="relative"
      flex="1"
    >
      <C.Text
        position="absolute"
        top="33px"
        w="100%"
        textAlign="center"
        color="white"
        fontFamily="'Gamja Flower'"
        zIndex={50}
      >
        똑바로해도, 거꾸로해도
      </C.Text>
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
        <Buttons.CTA
          w="100%"
          mt="24px"
          onClick={next}
          fontFamily="'Gamja Flower'"
        >
          게임 시작
        </Buttons.CTA>
        <C.Box h="8px " />
        <ShareButton
          colorScheme="gray"
          borderColor="rgba(0,0,0, 0.3)"
          text="똑바로 읽어도 거꾸로 읽어도 우영우 게임"
          url={url}
        >
          친구에게 공유
        </ShareButton>
      </C.Box>
    </C.Flex>
  );
}
