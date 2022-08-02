import React from 'react';
import * as C from '@chakra-ui/react';

export default function RestTime() {
  const [progress, setProgress] = React.useState(100);

  React.useEffect(() => {
    setProgress(0);
  }, []);

  return (
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
  );
}
