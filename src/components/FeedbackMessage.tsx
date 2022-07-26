import * as C from '@chakra-ui/react';

interface Props {
  score: number;
}

export default function FeedbackMessage({ score }: Props) {
  const message = useFeedbackMessage(score);
  return <C.Text textAlign="center">{message}</C.Text>;
}

function useFeedbackMessage(score: number) {
  const messages = [
    '무게에만 초점을 맞추면 문제를 풀 수 없습니다',
    '이 사건은 재미있습니다',
    '엄밀히 말하면, 게살 김밥이 아닙니다.',
    '실무를 모르는. 애송이. 입니다.',
    '몰라서 물어보는게 아니고 가르치려고 물어보는 거에요.',
    '대신 아버지에게는 부케를 드리겠습니다',
    '사건을 너무 감정적으로 대하지 않게 식혀주라고. 이렇게. 워~ 워~',
    '오늘부터 다시 출근해도 되겠습니까?',
    '뭐? 페어플레이? 너나 하세요, 페어플레이.',
    '그러면 미간을 봐. 이 진실의 미간!',
    '아이고! 딸 아니에요~. 손님도 이만 나가세요. 예?',
    '이준호는 우영우를 좋아한다. 사실입니까?',
    '봄날의 햇살 최수연이야.',
    '마저 먹어. 난 쪽팔려서 먼저 가야 돼.',
    '저 짬에서 나온 묘수',
    '리듬을 타면 쉽거든요. 쿵 짝짝. 쿵 짝짝.',
  ];
  return messages[score];
}
