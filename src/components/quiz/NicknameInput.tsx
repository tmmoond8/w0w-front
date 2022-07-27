import React from 'react';
import * as C from '@chakra-ui/react';
import { Buttons, Header } from 'src/components';
import storage from 'src/libs/storage';

export default function NicknameInput({ next }: { next: () => void }) {
  const [nickname, setNickname] = React.useState(storage.getNickname() ?? '');
  const [error, setError] = React.useState(false);

  return (
    <C.Flex as="div" flexDirection="column" position="relative" flex="1">
      <Header />
      <C.Box p="16px 16px 0 16px">
        <C.Text fontFamily="'Gamja Flower'">닉네임을 알려주세요 🐳</C.Text>
        <C.InputGroup>
          <C.Input
            type="text"
            placeholder="닉네임은 2글자 이상으로 입력해주세요"
            mt="12px"
            h="48px"
            value={nickname}
            fontFamily="'Gamja Flower'"
            borderRadius="12px"
            onChange={(e) => {
              if (e.target.value.trim().length >= 2) {
                setError(false);
              }
              setNickname(e.target.value);
            }}
            isInvalid={error}
          />
        </C.InputGroup>
        <Buttons.CTA
          mt="10px"
          w="100%"
          fontFamily="'Gamja Flower'"
          onClick={() => {
            if (nickname.trim().length < 2) {
              setError(true);
              return;
            }
            storage.setNickname(nickname);
            next();
          }}
        >
          입력완료
        </Buttons.CTA>
      </C.Box>
    </C.Flex>
  );
}
