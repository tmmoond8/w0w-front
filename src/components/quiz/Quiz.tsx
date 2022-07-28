import React from 'react';
import * as C from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { QuizSet, StrpItem } from 'src/types';
import { Header } from 'src/components';
import APIS from 'src/apis';
import storage from 'src/libs/storage';
import ga from 'src/libs/ga';

interface Props {
  quizSet: StrpItem<QuizSet>;
}

export default function Quiz({ quizSet }: Props) {
  const quizzes = React.useMemo(() => {
    const _quizzes = [...quizSet.attributes.quizzes.data];
    _quizzes.sort((a, b) => a.attributes.weight - b.attributes.weight);
    return _quizzes;
  }, [quizSet]);

  const [input, setInput] = React.useState('');
  const [status, setStatus] = React.useState<null | 'OK' | 'NO'>(null);
  const [quizIndex, nextQuiz] = React.useReducer((index) => index + 1, 0);
  const [progress, setProgress] = React.useState(100);
  const [timeOver, setTimeOver] = React.useState(false);
  const timerRefs = React.useRef<{
    timeOver: ReturnType<typeof setTimeout>;
    isClear: ReturnType<typeof setTimeout>;
  }>({} as any);
  const router = useRouter();
  const fadeIn = C.keyframes`
    from { opacity: 0 };
    to { opacity: 1};
  `;
  const vibration = C.keyframes`
    from { transform: rotate(4deg) };
    to { transform: rotate(-4deg) };
  `;

  const handleNextQuiz = () => {
    nextQuiz();
    if (quizIndex < quizzes.length) {
      ga.sendEvent('quiz', {
        quizId: quizSet.id,
        quizNumber: quizIndex + 1,
      });
    }
  };

  const currentQuiz = React.useMemo(() => {
    const index = Math.min(quizIndex, quizzes.length - 1);
    const syllables = quizzes[index].attributes.syllables
      .split(',')
      .map((value) => ({
        key: (Math.random() * 1234).toString(36),
        value,
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

  React.useEffect(() => {
    setProgress(0);
    if (timerRefs.current) {
      timerRefs.current.timeOver = setTimeout(() => {
        setTimeOver(true);
      }, 60 * 1000);
    }

    return () => {
      if (timerRefs.current) {
        clearTimeout(timerRefs.current.timeOver);
      }
    };
  }, [timerRefs.current]);

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

  console.log('currentQuiz', currentQuiz.syllables);

  return (
    <C.Flex display="flex" flexDirection="column" flex="1" h="100%">
      <Header />
      <C.Box position="relative" p="0 20px">
        <C.Text
          position="absolute"
          right="20px"
          top="-30px"
          color="#00000080"
          fontFamily="'Gamja Flower'"
        >
          남은시간
        </C.Text>
        <C.Progress
          w="100%"
          h="4px"
          borderRadius="2px"
          __css={{
            bgColor: '#9D94914D',
            height: '4px',
            '& > div': {
              transition: 'width 60s linear',
              backgroundColor: '#E52E6B',
            },
          }}
          value={progress}
        />
      </C.Box>

      {quizIndex >= quizzes.length && (
        <C.Flex
          position="absolute"
          top="25vh"
          left="0"
          w="100%"
          h="100%"
          zIndex="100"
          backdropFilter="blur(2px)"
          transition="opacity 0.3s ease-out"
          animation={`${fadeIn} 0.3s ease-out`}
        >
          <C.Text
            fontSize="24px"
            w="100%"
            textAlign="center"
            fontFamily="'Gamja Flower'"
          >
            모든 문제를 풀었어요!~ 👏
          </C.Text>
        </C.Flex>
      )}
      <C.Center flexDirection="column" h="100%">
        <C.Flex justifyContent="center" gap="0 16px">
          {Array.from({ length: 3 }).map((_, index) => (
            <C.Text
              w="60px"
              key={index}
              h="60px"
              borderBottom={`3px solid ${
                index % 2 === 0 ? '#E52E6B' : 'rgba(0,0,0, 0.25)'
              }`}
              fontSize="48px"
              textAlign="center"
              lineHeight="42px"
              fontFamily="'Gamja Flower'"
              color={`${index % 2 === 0 ? '#E52E6B' : 'rgba(0,0,0, 0.75)'}`}
              animation={
                status === 'NO' ? `${vibration} .11s infinite` : 'none'
              }
            >
              {input[index]}
            </C.Text>
          ))}
        </C.Flex>
        <C.Box h="48px" />
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
      </C.Center>
    </C.Flex>
  );
}
