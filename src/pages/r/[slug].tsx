import React from 'react';
import { GetServerSidePropsContext } from 'next';
import NextImage from 'next/image';
import * as C from '@chakra-ui/react';
import APIS from 'src/apis';
import type { QuizResult, QuizSet } from 'src/types';
import { Header, Meta, ShareButton, FeedbackMessage } from 'src/components';
import resultImages from 'src/assets/result';
import resultBackground from 'src/assets/result_bg.jpg';
import { useRouter } from 'next/router';
import storage from 'src/libs/storage';

interface Props {
  quizResult: QuizResult;
  quizSet: QuizSet;
}

export default function ResultPage({ quizResult, quizSet }: Props) {
  const router = useRouter();
  const [nickname, setNickname] = React.useState('');

  React.useEffect(() => {
    if (quizResult === null) {
      router.replace('/');
    }
  }, [quizResult]);

  React.useEffect(() => {
    setNickname(storage.getNickname() ?? '');
  }, []);

  if (!quizResult || !quizSet) {
    return null;
  }
  return (
    <>
      <Header />
      <Meta
        title={`${quizResult.nickname} 님의 우영우 게임 결과는 ${quizResult.score}개`}
        description={`${quizResult.nickname} 님보다 더 많이 맞힐 수 있다면 도전!!!`}
        image={resultImages[quizResult.score].src}
      />
      <C.Box
        width="100%"
        h="80vh"
        position="absolute"
        top="0"
        zIndex="-1"
        overflow="hidden"
        filter="blur(3px)"
      >
        <NextImage
          src={resultBackground}
          width="475px"
          height="800px"
          objectFit="cover"
        />
      </C.Box>
      <C.Center flexDirection="column" h="calc(100vh - 60px)" p="16px">
        <C.Flex
          flexDirection="column"
          border="2px white solid"
          h="100%"
          borderRadius="22px"
          w="100%"
          maxW="300px"
          maxH="360px"
          overflow="hidden"
        >
          <C.Box
            __css={{
              '& > span': {
                height: '100% !important',
              },
            }}
          >
            <NextImage
              src={resultImages[quizResult.score]}
              width="300px"
              height="180px"
              objectFit="cover"
            />
          </C.Box>
          <C.Flex flexDirection="column" flex="1" bg="rgba(255, 255, 255, 0.6)">
            <C.Text fontSize="18px" textAlign="center" mt="16px">
              <C.Text as="strong" color="#f79aba">
                {quizResult.nickname}
              </C.Text>
              님의 우영우 게임 결과는?
            </C.Text>
            <C.Center flex="1" maxH="90px">
              <C.Text textAlign="center" fontSize="52px">
                {quizResult.score}개
              </C.Text>
            </C.Center>
            <FeedbackMessage score={quizResult.score} />
          </C.Flex>
        </C.Flex>
        <C.Flex w="300px" gap="0 8px" mt="6vh">
          <ShareButton
            text={`${quizResult.nickname} 님의 우영우 게임 점수는 ${quizResult.score}`}
            url={globalThis.location?.href}
          >
            점수 자랑하기
          </ShareButton>
          <ShareButton
            text={quizSet.ogTitle}
            url={`${globalThis.location?.origin}/q/${quizResult.quizId}`}
          >
            우영우 게임 공유하기
          </ShareButton>
        </C.Flex>
        <C.Button
          w="100%"
          maxW="300px"
          mt="12px"
          onClick={() => router.replace(`/q/${quizResult.quizId}`)}
        >
          {nickname ? '다시하기' : ' 나도 해보기'}
        </C.Button>
      </C.Center>
    </>
  );
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<{ slug: string }>) {
  if (!params?.slug) {
    return {
      props: {
        quizResult: null,
        quizSet: null,
      },
    };
  }
  const {
    data: { attributes: quizResult },
  } = await APIS.result.get(parseInt(params.slug));
  const {
    data: { attributes: quizSet },
  } = await APIS.quizSet.get(quizResult.quizId);
  return {
    props: {
      quizResult,
      quizSet,
    },
  };
}
