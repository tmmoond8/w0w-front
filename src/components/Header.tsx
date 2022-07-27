import { Flex, Text } from '@chakra-ui/react';
import { Logo } from 'src/components';

export default function Header() {
  return (
    <Flex alignItems="center" as="nav" h="60px" minH="80px" p="10px 20px">
      <Logo width="60px" mt="8px" />
    </Flex>
  );
}
