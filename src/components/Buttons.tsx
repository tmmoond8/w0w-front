import { Button, ButtonProps } from '@chakra-ui/react';

export default {
  CTA,
};

function CTA(props: ButtonProps) {
  return (
    <Button
      opacity={0.8}
      h="48px"
      colorScheme="pink"
      bgColor="#E52E6B"
      borderRadius="12px"
      color="white"
      {...props}
    >
      {props.children}
    </Button>
  );
}
