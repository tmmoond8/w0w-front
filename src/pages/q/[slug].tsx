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

export default function QuizPage() {
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
        title="title"
        description="description"
        url={`https://w0w.tammolo.com/q/${slug}`}
      />
      <Footer />
    </>
  );
}
