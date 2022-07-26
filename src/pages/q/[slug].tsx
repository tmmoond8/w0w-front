import React from 'react';
import { useRouter } from 'next/router';
import * as C from '@chakra-ui/react';
import {
  Header,
  Footer,
  NicknameInput,
  Quiz,
  Meta,
  Intro,
} from 'src/components';
import APIS from 'src/apis';
import { QuizSet, StrpItem } from 'src/types';
import ENVS from 'src/libs/envs';
import storage from 'src/libs/storage';

export default function QuizPage({ quizSet }: { quizSet: StrpItem<QuizSet> }) {
  const [step, setStep] = React.useState(storage.getNickname() ? 1 : 0);
  const next = () => {
    setStep((prev) => prev + 1);
  };
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Header />
      <C.Box flex="1" overflow="hidden">
        {step == 0 && <Intro next={next} />}
        {step == 1 && <NicknameInput next={next} />}
        {step == 2 && quizSet && <Quiz quizSet={quizSet} />}
      </C.Box>
      <Meta
        title={quizSet.attributes.ogTitle}
        description={quizSet.attributes.ogDescription}
        url={`${ENVS.NEXT_PUBLIC_URL}/q/${slug}`}
      />
      {step == 0 && <Footer />}
    </>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { data } = await APIS.quizSet.get(params.slug);

  return {
    props: {
      quizSet: data,
    },
  };
}

export async function getStaticPaths() {
  const res = await APIS.quizSet.all();
  const paths = res.data.map(({ id }) => ({
    params: { slug: id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
