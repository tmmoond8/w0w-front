import React from 'react';
import * as C from '@chakra-ui/react';
import { QuizSet, StrpItem } from 'src/types';
import { Header } from 'src/components';
import RestTime from './RestTime';
import GameDisplay from './GameDisplay';
import GamePad from './GamePad';
import GameMessage from './GameMessage';
import { useGame } from './hooks';
import session from 'src/libs/session';

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
      {quizIndex >= quizzes.length && (
        <GameMessage message="모든 문제를 풀었어요!~ 👏" />
      )}
      {quizSet.id === 1 && session.getSoEasy() && (
        <GameMessage message="쉽다는 증거 있습니까? 👀" />
      )}
      <C.Center flexDirection="column" h="100%">
        <GameDisplay input={input} status={status} />
        <C.Box h="48px" />
        <GamePad
          currentQuiz={currentQuiz}
          handleClickSyllable={handleClickSyllable}
        />
      </C.Center>
    </C.Flex>
  );
}
