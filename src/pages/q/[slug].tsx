import React from 'react';
import { useRouter } from 'next/router';
import {
  Header,
  Footer,
  NicknameInput,
  Quiz,
  Meta,
  Intro,
} from 'src/components';
import APIS from 'src/apis';
import { QuizSet } from 'src/types';
import ENVS from 'src/libs/envs';

export default function QuizPage({ quizSet }: { quizSet: QuizSet }) {
  const [step, setStep] = React.useState(2);
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
      {step == 2 && <Quiz />}
      <Meta
        title={quizSet.ogTitle}
        description={quizSet.ogDescription}
        url={`${ENVS.NEXT_PUBLIC_URL}/q/${slug}`}
      />
      <Footer />
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
