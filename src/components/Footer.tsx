import * as C from '@chakra-ui/react';
import { ExternalLink } from 'src/components';

export default function Footer() {
  return (
    <C.Box p="16px 16px 34px 16px">
      <C.Text fontSize="12px">
        우영우 게임은 상업성이 없는 단순한 팬 게임 입니다.
      </C.Text>
      <C.HStack mt="16px">
        <ExternalLink
          url="http://ena.skylifetv.co.kr/bbs/board.php?bo_table=skydrama&wr_id=113&sca=%EC%B5%9C%EC%8B%A0"
          flex="1"
        >
          <C.Button
            bgColor="#f79aba !important"
            width="100%"
            _hover={{
              filter: 'brightness(110%)',
            }}
            _active={{
              filter: 'brightness(90%)',
            }}
            color="white"
            fontSize="12px"
          >
            우영우 공식 홈페이지
          </C.Button>
        </ExternalLink>
        <ExternalLink url="https://wooyoungwoo.tv/" flex="1">
          <C.Button
            bgColor="#f79aba !important"
            width="100%"
            _hover={{
              filter: 'brightness(110%)',
            }}
            _active={{
              filter: 'brightness(90%)',
            }}
            color="white"
            fontSize="12px"
          >
            우영우 공식 팬 커뮤니티
          </C.Button>
        </ExternalLink>
      </C.HStack>

      <ExternalLink url="https://quiz.watcha.io/">
        <C.Text color="#f79aba" fontSize="12px">
          왓챠벨을 따라 만들었어요
        </C.Text>
      </ExternalLink>
    </C.Box>
  );
}
