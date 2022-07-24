import React from 'react';
import NextImage from 'next/image';
import mainImage from 'src/assets/main.jpeg';
import { Flex, Box, Button } from '@chakra-ui/react';
import { Header, Footer, Buttons } from 'src/components';

export default function QuizPage() {
  const [step, setStep] = React.useState(0);
  const next = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <>
      <Header />
      {step == 0 && <Intro next={next} />}
      <Footer />
    </>
  );
}

function Intro({ next }: { next: () => void }) {
  return (
    <Flex as="div" flexDirection="column" position="relative">
      <Box maxW="400px" height="auto" margin="0 auto">
        <NextImage src={mainImage} width="400px" height="573px" />
      </Box>
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
        우영우 게임 시작!
      </Buttons.CTA>
    </Flex>
  );
}
