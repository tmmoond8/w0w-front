import * as C from '@chakra-ui/react';
import { ExternalLink } from 'src/components';

export default function Footer() {
  return (
    <C.Box p="16px 20px 0 20px" minH="116px">
      <C.Text as="p" fontSize="12px" color="#d1c6c2" textAlign="center">
        이 게임은 우영우를 응원하는 팬심으로 만든 비상업용 게임입니다
      </C.Text>
      <C.HStack w="auto" m="6px auto" alignItems="center" gap="0 16px">
        <ExternalLink
          url="http://ena.skylifetv.co.kr/bbs/board.php?bo_table=skydrama&wr_id=113&sca=%EC%B5%9C%EC%8B%A0"
          flex="1"
        >
          <C.Text fontSize="12px" color="rgba(0,0,0, 0.5)" textAlign="right">
            공식 홈페이지
          </C.Text>
        </ExternalLink>
        <C.Text
          color="rgba(0,0,0, 0.25)"
          p="0 !important"
          m="0 0 2px 0 !important"
        >
          |
        </C.Text>
        <ExternalLink url="https://wooyoungwoo.tv/" flex="1">
          <C.Text fontSize="12px" color="rgba(0,0,0, 0.5)">
            팬 커뮤니티
          </C.Text>
        </ExternalLink>
      </C.HStack>
      <C.Text as="p" fontSize="12px" color="#d1c6c2" textAlign="center">
        Develop by Tamm / Design by Kibok
      </C.Text>
      <C.Box h="32px" />
      <ExternalLink url="https://quiz.watcha.io/" mt="12px" m="0 !important">
        <C.Text
          h="28px"
          w="calc(100% + 40px)"
          ml="-20px"
          fontSize="10px"
          lineHeight="28px"
          textAlign="center"
          bgColor="#F0EBE1"
        >
          왓챠벨을 참고하여 만들었습니다.
        </C.Text>
      </ExternalLink>
    </C.Box>
  );
}
