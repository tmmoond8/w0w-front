import React from 'react';
import { useRouter } from 'next/router';
import * as C from '@chakra-ui/react';
import { Footer, NicknameInput, Quiz, Meta, Intro } from 'src/components';
import APIS from 'src/apis';
import { QuizSet, StrpItem } from 'src/types';
import ENVS from 'src/libs/envs';

export default function QuizPage({ quizSet }: { quizSet: StrpItem<QuizSet> }) {
  const [step, setStep] = React.useState(0);
  const next = () => {
    setStep((prev) => prev + 1);
  };
  const router = useRouter();
  const { slug } = router.query;

  React.useEffect(() => {
    if (router.query.step) {
      setStep(parseInt(router.query.step as string));
    }
  }, [router.query]);

  return (
    <>
      <Meta
        title={quizSet.attributes.ogTitle}
        description={quizSet.attributes.ogDescription}
        url={`${ENVS.NEXT_PUBLIC_URL}/q/${slug}`}
      />
      <C.Box flex="1" overflow="hidden">
        {step == 0 && (
          <Intro
            quizId={quizSet.id}
            next={next}
            url={`${ENVS.NEXT_PUBLIC_URL}/q/${slug}`}
          />
        )}
        {step == 1 && <NicknameInput quizId={quizSet.id} next={next} />}
        {step == 2 && quizSet && <Quiz quizSet={quizSet} />}
      </C.Box>
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
