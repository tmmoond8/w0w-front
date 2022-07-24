import React from 'react';
import * as C from '@chakra-ui/react';
import { Buttons } from 'src/components';
import storage from 'src/libs/storage';

export default function NicknameInput({ next }: { next: () => void }) {
  const [nickname, setNickname] = React.useState(storage.getNickname() ?? '');
  const [error, setError] = React.useState(false);

  return (
    <C.Flex as="div" flexDirection="column" position="relative" flex="1">
      <C.Box p="32px 16px 0 16px">
        <C.Text>닉네임을 알려주세요 🐳</C.Text>
        <C.InputGroup>
          <C.Input
            type="text"
            placeholder="닉네임은 2글자 이상으로 입력해주세요"
            mt="12px"
            value={nickname}
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
          mt="32px"
          colorScheme="pink"
          w="100%"
          onClick={() => {
            if (nickname.trim().length < 2) {
              setError(true);
              return;
            }
            storage.setNickname(nickname);
            next();
          }}
        >
          우영우 게임 시작!
        </Buttons.CTA>
      </C.Box>
    </C.Flex>
  );
}
