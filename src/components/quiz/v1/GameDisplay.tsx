import React from 'react';
import * as C from '@chakra-ui/react';

interface Props {
  input: string;
  status: 'OK' | 'NO' | null;
}

export default function GamePlay({ input, status }: Props) {
  const AnswerAnimation = React.useMemo(() => {
    if (status === 'NO') {
      const vibration = C.keyframes`
        from { transform: rotate(4deg) };
        to { transform: rotate(-4deg) };
     `;
      return `${vibration} 0.11s infinite`;
    }
    if (status === 'OK') {
      const scale = C.keyframes`
        0% { transform: scale3d(1,1,1) };
        50% { transform: scale3d(1.3, 1.3, 1) };
        100% { transform: scale3d(1,1,1) };
      `;
      return `${scale} .6s infinite`;
    }

    return `none`;
  }, [status]);

  return (
    <C.Flex justifyContent="center" gap="0 16px">
      {Array.from({ length: 3 }).map((v, index) => (
        <C.Text
          w="60px"
          key={`${v}${index}`}
          h="60px"
          borderBottom={`3px solid ${
            index % 2 === 0 ? '#E52E6B' : 'rgba(0,0,0, 0.25)'
          }`}
          fontSize="48px"
          textAlign="center"
          lineHeight="42px"
          fontFamily="'Gamja Flower'"
          color={`${index % 2 === 0 ? '#E52E6B' : 'rgba(0,0,0, 0.75)'}`}
          animation={AnswerAnimation}
        >
          {input[index]}
        </C.Text>
      ))}
    </C.Flex>
  );
}
