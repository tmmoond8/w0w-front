import * as C from '@chakra-ui/react';
import { ExternalLink } from 'src/components';

export default function Footer() {
  return (
    <C.Box p="16px 16px 34px 16px" minH="100px">
      <C.HStack>
        <ExternalLink
          url="http://ena.skylifetv.co.kr/bbs/board.php?bo_table=skydrama&wr_id=113&sca=%EC%B5%9C%EC%8B%A0"
          flex="1"
        >
          <C.Button variant="outline" width="100%" fontSize="12px">
            우영우 공식 홈페이지
          </C.Button>
        </ExternalLink>
        <ExternalLink url="https://wooyoungwoo.tv/" flex="1">
          <C.Button variant="outline" width="100%" fontSize="12px">
            우영우 공식 팬 커뮤니티
          </C.Button>
        </ExternalLink>
      </C.HStack>

      <ExternalLink url="https://quiz.watcha.io/" mt="12px">
        <C.Text color="#f79aba" fontSize="12px" textDecoration="underline">
          왓챠벨을 참고하여 만들었어요
        </C.Text>
      </ExternalLink>
    </C.Box>
  );
}
