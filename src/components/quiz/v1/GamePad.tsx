import React from 'react';
import * as C from '@chakra-ui/react';
import type { Quiz } from 'src/types';

interface Props {
  currentQuiz: Omit<Quiz, 'syllables'> & {
    id: number;
    syllables: { key: string; value: string }[];
  };
  handleClickSyllable: (v: string) => void;
}

export default function GamePad({ currentQuiz, handleClickSyllable }: Props) {
  return (
    <C.Grid
      templateColumns={`repeat(${currentQuiz.syllables.length / 2}, 60px)`}
      justifyContent="center"
      m="0 auto"
      p="0 12px"
      gap="10px"
    >
      {currentQuiz.syllables.map(({ key, value }) => (
        <C.GridItem key={key} w="60px" h="60px">
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
            onClick={() => handleClickSyllable(value)}
          >
            {value}
          </C.Button>
        </C.GridItem>
      ))}
    </C.Grid>
  );
}
