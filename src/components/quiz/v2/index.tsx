import React from 'react';
import * as C from '@chakra-ui/react';
import { QuizSet, StrpItem } from 'src/types';
import { Header } from 'src/components';
import RestTime from './RestTime';
import GameDisplay from './GameDisplay';
import GamePad from './GamePad';
import GameClear from './GameClear';
import { useGame } from './hooks';

interface Props {
  quizSet: StrpItem<QuizSet>;
}

export default function Quiz({ quizSet }: Props) {
  const {
    currentQuiz,
    quizIndex,
    quizzes,
    status,
    input,
    handleClickSyllable,
  } = useGame({
    quizSet,
  });

  return (
    <C.Flex display="flex" flexDirection="column" flex="1" h="100%">
      <Header badgeText={quizSet.id === 3 ? '우당탕탕' : undefined} />
      <RestTime />
      {quizIndex >= quizzes.length && <GameClear />}
      <C.Center flexDirection="column" h="100%">
        <GameDisplay input={input} status={status} />
        <C.Box h="48px" />
        <GamePad
          currentQuiz={currentQuiz}
          quizIndex={quizIndex}
          handleClickSyllable={handleClickSyllable}
        />
      </C.Center>
    </C.Flex>
  );
}
