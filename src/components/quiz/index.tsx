import type { StrpItem, QuizSet } from 'src/types';
import QuizV1 from './v1';

interface Props {
  quizSet: StrpItem<QuizSet>;
}

export function Quiz({ quizSet }: Props) {
  const QuizComp = QuizV1;

  return <QuizComp quizSet={quizSet} />;
}

export { default as Intro } from './Intro';
export { default as NicknameInput } from './NicknameInput';
