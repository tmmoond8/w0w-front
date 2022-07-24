import React from 'react';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import mainImage from 'src/assets/main.jpeg';
import * as C from '@chakra-ui/react';
import { Header, Footer, Buttons, Meta } from 'src/components';
import storage from 'src/libs/storage';

export default function QuizPage() {
  const [step, setStep] = React.useState(0);
  const next = () => {
    setStep((prev) => prev + 1);
  };
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Header />
      {step == 0 && <Intro next={next} />}
      {step == 1 && <NicknameInput next={next} />}
      <Meta
        title="title"
        description="description"
        url={`https://w0w.tammolo.com/q/${slug}`}
      />
      <Footer />
    </>
  );
}

function Intro({ next }: { next: () => void }) {
  return (
    <C.Flex as="div" flexDirection="column" position="relative">
      <C.Box maxW="400px" height="auto" margin="0 auto">
        <NextImage src={mainImage} width="400px" height="573px" />
      </C.Box>
      <Buttons.CTA
        colorScheme="pink"
        position="absolute"
        left="0"
        right="0"
        top="50%"
        maxW="300px"
        m="0 auto"
        onClick={next}
      >
        게임 시작 하기
      </Buttons.CTA>
    </C.Flex>
  );
}

function NicknameInput({ next }: { next: () => void }) {
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
