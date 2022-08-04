import * as C from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Logo } from 'src/components';

interface Props {
  badgeText?: string;
}

export default function Header({ badgeText }: Props) {
  const router = useRouter();
  return (
    <C.Flex
      position="relative"
      alignItems="center"
      as="nav"
      h="60px"
      minH="80px"
      p="10px 20px"
    >
      <Logo width="60px" mt="8px" onClick={() => router.replace('/')} />
      {badgeText && (
        <C.Text
          position="absolute"
          left="84px"
          p="0 10px"
          bgColor="#E62E6B"
          color="white"
          fontSize="13px"
          fontFamily="'Gamja Flower'"
          borderRadius="12px"
          transform="rotate(-10deg)"
        >
          {badgeText}
        </C.Text>
      )}
    </C.Flex>
  );
}
