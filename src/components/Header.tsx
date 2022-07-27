import * as C from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Logo } from 'src/components';

export default function Header() {
  const router = useRouter();
  return (
    <C.Flex alignItems="center" as="nav" h="60px" minH="80px" p="10px 20px">
      <Logo width="60px" mt="8px" onClick={() => router.replace('/')} />
    </C.Flex>
  );
}
