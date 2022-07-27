import * as C from '@chakra-ui/react';

interface Props extends C.TextProps {
  score: number;
}

export default function FeedbackMessage({ score, ...props }: Props) {
  const message = useFeedbackMessage(score);
  return (
    <C.Text px="16px" textAlign="center" {...props}>
      &quot;{message}&quot;
    </C.Text>
  );
}

function useFeedbackMessage(score: number) {
  const messages = [
    '무게에만 초점을 맞추면 문제를 풀 수 없습니다',
    '이 사건은 재미있습니다',
    '엄밀히 말하면, 게살 김밥이 아닙니다.',
    '실무를 모르는. 애송이. 입니다.',
    '몰라서 물어보는게 아니고 가르치려고 물어보는 거에요.',
    '사건을 너무 감정적으로 대하지 않게 식혀주라고. 이렇게. 워~ 워~',
    '저 짬에서 나온 묘수',
    '오늘부터 다시 출근해도 되겠습니까?',
    '봄날의 햇살 최수연이야.',
    '아이고! 딸 아니에요~. 손님도 이만 나가세요. 예?',
    '그러면 미간을 봐. 이 진실의 미간!',
    '한 마디를 안 져 씨...',
    '이준호는 우영우를 좋아한다. 사실입니까?',
    '자폐인은 나로만 이루어진 세계에 사는데 익숙합니다.',
    '리듬을 타면 쉽거든요. 쿵 짝짝. 쿵 짝짝.',
    '그날, 제 분당 심박수가 엄청났습니다.',
  ];
  return messages[score];
}
