import React from 'react';
import { GetServerSidePropsContext } from 'next';
import NextImage from 'next/image';
import * as C from '@chakra-ui/react';
import APIS from 'src/apis';
import type { QuizResult, QuizSet } from 'src/types';
import {
  Header,
  Meta,
  ShareButton,
  FeedbackMessage,
  Footer,
  Buttons,
} from 'src/components';
import { resultOgs, resultSquares } from 'src/assets/result';
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
        image={resultOgs[quizResult.score].src}
      />
      <C.Center flexDirection="column" p="16px" flex="1">
        <C.Flex
          as="section"
          h="100%"
          maxH="460px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <C.Flex
            position="relative"
            flexDirection="column"
            justifyContent="space-between"
            // border="2px white solid"
            borderRadius="22px"
            w="100%"
            maxW="600px"
            maxH="600px"
            overflow="hidden"
            __css={{
              aspectRatio: '1 / 1',
            }}
          >
            <C.Box
              h="100%"
              __css={{
                '& > span': {
                  height: '100% !important',
                },
              }}
            >
              <NextImage
                objectFit="cover"
                objectPosition="center"
                src={resultSquares[quizResult.score]}
              />
            </C.Box>
            <C.Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              background="linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 97.08%)"
            >
              <FeedbackMessage
                position="absolute"
                top="24px"
                fontSize="18px"
                color="#F0EBE1"
                fontFamily="'Gamja Flower'"
                textAlign="center"
                w="100%"
                score={quizResult.score}
              />
              <C.Text
                position="absolute"
                w="100%"
                bottom="34px"
                color="#F0EBE1"
                fontFamily="'Gamja Flower'"
                textAlign="center"
                fontSize="72px"
              >
                {quizResult.score}개
              </C.Text>
              <C.Text
                position="absolute"
                w="100%"
                bottom="24px"
                color="#F0EBE1"
                fontFamily="'Gamja Flower'"
                textAlign="center"
                fontSize="16px"
              >
                <C.Text as="strong" color="#E52E6B">
                  {quizResult.nickname}
                </C.Text>
                님의 우영우게임 점수
              </C.Text>
            </C.Box>
          </C.Flex>
          <C.HStack gap="0 8px" mt="8px">
            <C.Box flex="1">
              <ShareButton
                text={`${quizResult.nickname} 님의 우영우 게임 점수는 ${quizResult.score}개`}
                url={globalThis.location?.href}
              >
                친구에게 공유
              </ShareButton>
            </C.Box>
            <C.Box flex="1" m="0 !important">
              <Buttons.CTA
                w="100%"
                fontFamily="'Gamja Flower'"
                onClick={() =>
                  router.replace(
                    `/q/${quizResult.quizId}${nickname ? '?step=1' : ''}`
                  )
                }
              >
                {nickname ? '다시하기' : ' 나도 해보기'}
              </Buttons.CTA>
            </C.Box>
          </C.HStack>
        </C.Flex>
      </C.Center>
      <Footer />
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
