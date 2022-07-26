import React from 'react';
import * as C from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { QuizSet, StrpItem } from 'src/types';
import APIS from 'src/apis';
import storage from 'src/libs/storage';

interface Props {
  quizSet: StrpItem<QuizSet>;
}

export default function Quiz({ quizSet }: Props) {
  const [input, setInput] = React.useState('');
  const [status, setStatus] = React.useState<null | 'OK' | 'NO'>(null);
  const [quizIndex, nextQuiz] = React.useReducer((index) => index + 1, 0);
  const [progress, setProgress] = React.useState(100);
  const [timeOver, setTimeOver] = React.useState(false);
  const router = useRouter();

  const quizzes = React.useMemo(() => {
    const _quizzes = [...quizSet.attributes.quizzes.data];
    _quizzes.sort((a, b) => a.attributes.weight - b.attributes.weight);
    return _quizzes;
  }, [quizSet]);

  const currentQuiz = React.useMemo(() => {
    const syllables = quizzes[quizIndex].attributes.syllables.split(',');
    if (quizIndex > 5) {
      syllables.sort(() => (Math.random() > 0.5 ? 1 : -1));
    }
    return {
      ...quizzes[quizIndex].attributes,
      id: quizzes[quizIndex].id,
      syllables,
    };
  }, [quizIndex, quizzes]);

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
          nextQuiz();
        }
        setStatus(null);
        setInput('');
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [status]);

  React.useEffect(() => {
    setProgress(0);
    const timer = setTimeout(() => {
      setTimeOver(true);
    }, 60 * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  React.useEffect(() => {
    if (timeOver) {
      APIS.result
        .create({
          quizId: quizSet.id,
          nickname: storage.getNickname() as string,
          score: quizIndex,
        })
        .then(({ data }) => {
          router.push(`/r/${data.data.id}`);
        });
    }
  }, [timeOver]);

  return (
    <C.Box flex="1" p="0 16px" h="100%">
      <C.Progress
        size="sm"
        __css={{
          bgColor: '#eee',
          margin: '0 -16px',
          height: '4px',
          width: 'calc(100% + 32px)',
          '& > div': {
            transition: 'width 60s linear',
            backgroundColor: '#f79aba',
          },
        }}
        value={progress}
      />
      <C.Center flexDirection="column" h="100%">
        <C.Flex justifyContent="center" gap="0 8px">
          {Array.from({ length: 3 }).map((_, index) => (
            <C.Text
              w="40px"
              key={index}
              h="40px"
              borderBottom="2px solid #f79aba"
              fontSize="20px"
              textAlign="center"
              lineHeight="42px"
              color={status === 'OK' || status === 'NO' ? '#f79aba' : '#222'}
            >
              {input[index]}
            </C.Text>
          ))}
        </C.Flex>
        <C.Box h="80px" />
        <C.Grid
          templateColumns={`repeat(${currentQuiz.syllables.length / 2}, 60px)`}
          justifyContent="center"
          m="0 auto"
          p="0 24px"
          gap="10px"
        >
          {currentQuiz.syllables.map((syllable) => (
            <C.GridItem key={syllable} w="60px" h="60px">
              <C.Button
                w="100%"
                h="100%"
                onClick={() => handleClickSyllable(syllable)}
              >
                {syllable}
              </C.Button>
            </C.GridItem>
          ))}
        </C.Grid>
      </C.Center>
    </C.Box>
  );
}
