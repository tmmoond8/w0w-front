import { Box } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      position="fixed"
      left="0"
      right="0"
      top="0"
      bottom="0"
      margin="auto"
      w="100vw"
      h="100%"
      minH="600px"
      maxW="460px"
      maxH="896px"
      bgColor="#F0EBE1"
    >
      {children}
    </Box>
  );
}
