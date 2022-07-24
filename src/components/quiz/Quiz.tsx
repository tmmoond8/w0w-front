import React from 'react';
import * as C from '@chakra-ui/react';

const sample = '카,운,터,도,없,는';

export default function Quiz() {
  const [input, setInput] = React.useState('');
  const [noAnswer, setNoAnswer] = React.useState(false);

  const handleClickSyllable = (syllable: string) => {
    if (noAnswer) {
      return;
    }
    const value = input + syllable;
    setInput(value);

    // 정답 체크,
    // 정답이면 next,
    // 오답이면 noAnswer
    if (value.length >= 3) {
      setNoAnswer(true);
    }
  };

  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (noAnswer) {
      timer = setTimeout(() => {
        setNoAnswer(false);
        setInput('');
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [noAnswer]);

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
            color={noAnswer ? '#f79aba' : '#222'}
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
        {sample.split(',').map((syllable) => (
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
