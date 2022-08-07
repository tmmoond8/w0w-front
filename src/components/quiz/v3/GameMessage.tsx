import React from 'react';
import * as C from '@chakra-ui/react';

const fadeIn = C.keyframes`
    from { opacity: 0 };
    to { opacity: 1};
  `;

interface Props {
  message: string;
}

export default function GameMessage({ message }: Props) {
  return (
    <C.Flex
      position="absolute"
      top="25vh"
      left="0"
      w="100%"
      h="100%"
      zIndex="100"
      backdropFilter="blur(2px)"
      transition="opacity 0.3s ease-out"
      animation={`${fadeIn} 0.3s ease-out`}
    >
      <C.Text
        fontSize="24px"
        w="100%"
        textAlign="center"
        fontFamily="'Gamja Flower'"
      >
        {message}
      </C.Text>
    </C.Flex>
  );
}
