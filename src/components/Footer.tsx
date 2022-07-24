import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box p="16px 16px 34px 16px">
      <Text fontSize="12px">
        우영우 게임은 상업성이 없는 단순한 팬 게임 입니다.
      </Text>
      <a
        href="http://ena.skylifetv.co.kr/bbs/board.php?bo_table=skydrama&wr_id=113&sca=%EC%B5%9C%EC%8B%A0"
        target="_blank"
      >
        <Text color="#f79aba" fontSize="12px">
          우영우 공식 홈페이지
        </Text>
      </a>
    </Box>
  );
}
