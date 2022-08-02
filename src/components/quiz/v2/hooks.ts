import React from 'react';
import { useRouter } from 'next/router';
import { StrpItem, QuizSet, Quiz } from 'src/types';
import ga from 'src/libs/ga';
import APIS from 'src/apis';
import storage from 'src/libs/storage';

export const useGame = ({ quizSet }: { quizSet: StrpItem<QuizSet> }) => {
  const [status, setStatus] = React.useState<null | 'OK' | 'NO'>(null);
  const [quizIndex, nextQuiz] = React.useReducer((index) => index + 1, 0);
  const [input, setInput] = React.useState('');
  const { quizzes, currentQuiz } = useQuizData({ quizSet, quizIndex });
  console.log('quizIndex', quizIndex);

  const handleNextQuiz = () => {
    nextQuiz();
    if (quizIndex < quizzes.length) {
      ga.sendEvent('quiz', {
        quizId: quizSet.id,
        quizNumber: quizIndex + 1,
      });
    }
  };

  const handleClickSyllable = (syllable: string) => {
    if (status) {
      return;
    }
    const value = input + syllable;
    setInput(value);

    if (value.length >= 3) {
      setStatus(value === currentQuiz.answer ? 'OK' : 'NO');
    }
  };

  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (status) {
      timer = setTimeout(() => {
        if (status === 'OK') {
          handleNextQuiz();
        }
        setStatus(null);
        setInput('');
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [status]);

  useGameTimeout({ quizId: quizSet.id, quizzes, quizIndex });

  return {
    quizzes,
    quizIndex,
    status,
    input,
    currentQuiz,
    handleNextQuiz,
    handleClickSyllable,
  };
};

function useGameTimeout({
  quizId,
  quizIndex,
  quizzes,
}: {
  quizId: number;
  quizIndex: number;
  quizzes: StrpItem<Quiz>[];
}) {
  const router = useRouter();
  const [timeOver, setTimeOver] = React.useState(false);
  const timerRefs = React.useRef<{
    timeOver: ReturnType<typeof setTimeout>;
    isClear: ReturnType<typeof setTimeout>;
  }>({} as any);

  React.useEffect(() => {
    if (timerRefs.current) {
      timerRefs.current.timeOver = setTimeout(() => {
        setTimeOver(true);
      }, 6000 * 1000);
    }

    return () => {
      if (timerRefs.current) {
        clearTimeout(timerRefs.current.timeOver);
      }
    };
  }, [timerRefs.current]);

  React.useEffect(() => {
    if (timeOver) {
      APIS.result
        .create({
          quizId,
          nickname: storage.getNickname() as string,
          score: quizIndex,
        })
        .then(({ data }) => {
          router.push(`/r/${data.data.id}`);
        });
    }
  }, [timeOver]);

  React.useEffect(() => {
    if (quizIndex >= quizzes.length) {
      timerRefs.current.isClear = setTimeout(() => {
        setTimeOver(true);
      }, 1000);
    }
    return () => {
      if (timerRefs.current) {
        clearTimeout(timerRefs.current.isClear);
      }
    };
  }, [quizIndex]);
}

function useQuizData({
  quizSet,
  quizIndex,
}: {
  quizSet: StrpItem<QuizSet>;
  quizIndex: number;
}) {
  const quizzes = React.useMemo(() => {
    const _quizzes = [...quizSet.attributes.quizzes.data];
    _quizzes.sort((a, b) => a.attributes.weight - b.attributes.weight);
    return _quizzes;
  }, [quizSet]);

  const currentQuiz = React.useMemo(() => {
    const index = Math.min(quizIndex, quizzes.length - 1);
    const syllables = quizzes[index].attributes.syllables
      .split(',')
      .map((value) => ({
        key: (Math.random() * 1234).toString(36),
        value,
        flip: true,
      }));
    if (index > 5) {
      syllables.sort(() => (Math.random() > 0.5 ? 1 : -1));
    }

    return {
      ...quizzes[index].attributes,
      id: quizzes[index].id,
      syllables,
    };
  }, [quizIndex, quizzes]);

  return {
    quizzes,
    currentQuiz,
  };
}
