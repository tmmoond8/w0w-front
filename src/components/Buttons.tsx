import { Button, ButtonProps } from '@chakra-ui/react';

export default {
  CTA,
};

function CTA(props: ButtonProps) {
  return (
    <Button opacity={0.8} {...props}>
      {props.children}
    </Button>
  );
}
