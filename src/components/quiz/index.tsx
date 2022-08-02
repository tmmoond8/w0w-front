import type { StrpItem, QuizSet } from 'src/types';
import QuizV1 from './v1';
import QuizV2 from './v2';
import session from 'src/libs/session';

interface Props {
  quizSet: StrpItem<QuizSet>;
}

export function Quiz({ quizSet }: Props) {
  const soEasy = session.getSoEasy();
  let QuizComp = QuizV1;
  if (quizSet.id >= 2 && soEasy) {
    QuizComp = QuizV2;
  }

  return <QuizComp quizSet={quizSet} />;
}

export { default as Intro } from './Intro';
export { default as NicknameInput } from './NicknameInput';
