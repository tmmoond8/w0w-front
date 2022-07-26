import React from 'react';
import { GetServerSidePropsContext } from 'next';
import NextImage from 'next/image';
import * as C from '@chakra-ui/react';
import APIS from 'src/apis';
import type { QuizResult, QuizSet } from 'src/types';
import { Header, Meta, Footer } from 'src/components';
import resultImages from 'src/assets/result';
import resultBackground from 'src/assets/result_bg.jpg';
import { useRouter } from 'next/router';

interface Props {
  quizResult: QuizResult;
  quizSet: QuizSet;
}

export default function ResultPage({ quizResult, quizSet }: Props) {
  const router = useRouter();

  React.useEffect(() => {
    if (quizResult === null) {
      router.replace('/');
    }
  }, [quizResult]);

  if (!quizResult || !quizSet) {
    return null;
  }
  return (
    <>
      <Header />
      <Meta
        title={`${quizResult.nickname} 님의 우영우 게임 결과는?`}
        description={`똑바로 읽어도 거꾸로 읽어도 우영우 게임`}
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
      <C.Center h="calc(80vh - 60px)" p="16px">
        <C.Flex
          flexDirection="column"
          border="2px white solid"
          h="100%"
          borderRadius="44px"
          w="100%"
          maxW="300px"
          maxH="400px"
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
              height="220px"
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
            <C.Center flex="1">
              <C.Text textAlign="center" fontSize="52px">
                {quizResult.score}개
              </C.Text>
            </C.Center>
          </C.Flex>
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
