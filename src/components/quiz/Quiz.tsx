import React from 'react';
import * as C from '@chakra-ui/react';
import { QuizSet, StrpItem } from 'src/types';

interface Props {
  quizSet: StrpItem<QuizSet>;
}

export default function Quiz({ quizSet }: Props) {
  const [input, setInput] = React.useState('');
  const [status, setStatus] = React.useState<null | 'OK' | 'NO'>(null);
  const [quizIndex, nextQuiz] = React.useReducer((index) => index + 1, 0);
  const { id, attributes } = quizSet;
  const { quizzes } = attributes;

  const currentQuiz = React.useMemo(() => {
    return {
      ...quizzes.data[quizIndex].attributes,
      id: quizzes.data[quizIndex].id,
    };
  }, [quizIndex, quizzes]);

  const handleClickSyllable = (syllable: string) => {
    if (status) {
      return;
    }
    const value = input + syllable;
    setInput(value);

    // 정답 체크,
    // 정답이면 next,
    // 오답이면 noAnswer
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

  return (
    <C.Box flex="1" p="0 16px">
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
      <C.Box h="20px" />
      <C.Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        maxW="200px"
        m="0 auto"
        gap="10px"
      >
        {currentQuiz.syllables.split(',').map((syllable) => (
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
    </C.Box>
  );
}
