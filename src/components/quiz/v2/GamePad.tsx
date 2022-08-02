import React from 'react';
import * as C from '@chakra-ui/react';
import type { Quiz } from 'src/types';

interface Props {
  currentQuiz: Omit<Quiz, 'syllables'> & {
    id: number;
    syllables: { key: string; value: string; flip: boolean }[];
  };
  handleClickSyllable: (v: string) => void;
}

export default function GamePad({ currentQuiz, handleClickSyllable }: Props) {
  const [isFront, setIsFront] = React.useState(false);
  return (
    <C.Grid
      templateColumns={`repeat(${currentQuiz.syllables.length / 2}, 60px)`}
      justifyContent="center"
      m="0 auto"
      p="0 12px"
      gap="10px"
    >
      {currentQuiz.syllables.map(({ key, value, flip }) => (
        <C.GridItem
          key={key}
          w="60px"
          h="60px"
          transform={`rotateY(${isFront ? 180 : 0}deg)`}
          transition="transform 0.8s"
          __css={{
            transformStyle: 'preserve-3d',
          }}
        >
          <C.Button
            w="100%"
            h="100%"
            colorScheme="gray"
            bgColor="#9D949126"
            fontFamily="'Gamja Flower'"
            borderRadius="12px"
            fontSize="28px"
            color="#00000080"
            _active={{
              bgColor: '#D1C6C2',
            }}
            _hover={{
              bgColor: '#D1C6C2',
            }}
            onClick={() => {
              setIsFront(!isFront);
              handleClickSyllable(value);
            }}
          >
            {value}
          </C.Button>
        </C.GridItem>
      ))}
      <C.Box>
        <C.Flex
          position="absolute"
          __css={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          aaa
        </C.Flex>
        <C.Flex>bbb</C.Flex>
      </C.Box>
    </C.Grid>
  );
}
