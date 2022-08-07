import type { StrpItem, QuizSet } from 'src/types';
import QuizV1 from './v1';
import QuizV2 from './v2';
import QuizV3 from './v3';

interface Props {
  quizSet: StrpItem<QuizSet>;
}

export function Quiz({ quizSet }: Props) {
  let QuizComp = QuizV1;
  if (quizSet.attributes.gameMode === '우당탕탕') {
    QuizComp = QuizV2;
  }
  if (quizSet.attributes.gameMode === '권모술수') {
    QuizComp = QuizV3;
  }

  return <QuizComp quizSet={quizSet} />;
}

export { default as Intro } from './Intro';
export { default as NicknameInput } from './NicknameInput';
