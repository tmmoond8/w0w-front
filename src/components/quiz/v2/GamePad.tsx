import React from 'react';
import * as C from '@chakra-ui/react';
import type { Quiz } from 'src/types';

interface Props {
  currentQuiz: Omit<Quiz, 'syllables'> & {
    id: number;
    syllables: { key: string; value: string }[];
  };
  quizIndex: number;
  handleClickSyllable: (v: string) => void;
}

export default function GamePad({
  currentQuiz,
  quizIndex,
  handleClickSyllable,
}: Props) {
  const [flips, setFlips] = React.useState<boolean[]>([]);

  React.useEffect(() => {
    if (quizIndex > 5) {
      const random = Math.random().toString(2).split('.').pop() as string;
      setFlips(currentQuiz.syllables.map((_, i) => random[i] === '1'));
    }
  }, [currentQuiz, quizIndex]);

  return (
    <C.Grid
      templateColumns={`repeat(${currentQuiz.syllables.length / 2}, 60px)`}
      justifyContent="center"
      m="0 auto"
      p="0 12px"
      gap="10px"
    >
      {currentQuiz.syllables.map(({ key, value }, index) => (
        <C.GridItem
          key={key}
          w="60px"
          h="60px"
          transform={`rotateY(${flips[index] ? 180 : 0}deg)`}
          transition="transform 0.8s"
          __css={{
            transformStyle: 'preserve-3d',
          }}
        >
          <C.Button
            w="100%"
            h="100%"
            colorScheme="gray"
            bgColor={flips[index] ? '#9D949176' : '#9D949126'}
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
              if (flips[index]) {
                setFlips(flips.map((b, i) => (i === index ? false : b)));
                return;
              }
              handleClickSyllable(value);
            }}
          >
            {value}
          </C.Button>
        </C.GridItem>
      ))}
    </C.Grid>
  );
}
