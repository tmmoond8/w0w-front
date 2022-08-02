import React from 'react';
import APIS from 'src/apis';
import { Meta } from 'src/components';
import { useRouter } from 'next/router';

interface Props {
  quizId: number;
}

export default function IndexPage({ quizId }: Props) {
  const router = useRouter();

  React.useEffect(() => {
    if (quizId) {
      router.replace(`/q/${quizId}`);
    }
  }, [quizId]);

  return (
    <>
      <Meta
        title={`우영우 게임`}
        description={`똑바로 읽어도 거꾸로 읽어도 우영우 게임`}
      />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await APIS.quizSet.all();
  return {
    props: {
      quizId: data[1].id,
    },
  };
}
