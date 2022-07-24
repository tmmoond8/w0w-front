import { Flex, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex alignItems="center" as="nav" h="60px" p="8px 16px">
      <Text>우영우 게임</Text>
    </Flex>
  );
}
