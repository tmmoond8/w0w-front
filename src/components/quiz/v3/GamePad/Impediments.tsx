import React from 'react';
import Image from 'next/image';
import * as C from '@chakra-ui/react';
import minwoo from './minwoo.png';

interface Point {
  x: number;
  y: number;
  key: string;
}

interface Props {
  syllablesSize: number;
}

export default function Impediments({ syllablesSize }: Props) {
  const [impediments, setImpediments] = React.useState<Point[]>([]);

  React.useEffect(() => {
    if (syllablesSize === 4) {
      setImpediments([
        {
          x: 1,
          y: 0,
          key: `${0}_${0}`,
        },
      ]);
    }
    if (syllablesSize === 6) {
      setImpediments([
        {
          x: 0,
          y: 1,
          key: `${0}_${1}`,
        },
        {
          x: 1,
          y: 0,
          key: `${1}_${0}`,
        },
      ]);
    }
    if (syllablesSize === 8) {
      setImpediments([
        {
          x: 0,
          y: 1,
          key: `${0}_${0}`,
        },
        {
          x: 1,
          y: 1,
          key: `${1}_${1}`,
        },
        {
          x: 2,
          y: 0,
          key: `${2}_${0}`,
        },
      ]);
    }

    if (syllablesSize === 10) {
      setImpediments([
        {
          x: 0,
          y: 1,
          key: `${0}_${0}`,
        },
        {
          x: 1,
          y: 1,
          key: `${1}_${1}`,
        },
        {
          x: 2,
          y: 0,
          key: `${2}_${0}`,
        },
        {
          x: 3,
          y: 1,
          key: `${3}_${1}`,
        },
      ]);
    }
  }, [syllablesSize]);

  return (
    <C.Box position="absolute" m="0 auto" p="0 12px">
      {impediments.map((point, i) => (
        <C.Box
          position="absolute"
          w="60px"
          height="60px"
          transform={getTranslate3d(point)}
          transition="transform 0.15s ease-in"
          key={point.key}
          cursor="pointer"
          onClick={() => {
            const nextPoint = getNextPosition(
              point,
              impediments,
              syllablesSize / 2
            );
            setImpediments(
              impediments.map((point, index) =>
                index === i ? nextPoint : point
              )
            );
          }}
        >
          <Image src={minwoo} height="60px" width="60px" />
        </C.Box>
      ))}
    </C.Box>
  );
}

function getTranslate3d(point: Point) {
  return `translate3d(${point.x * 70}px, ${point.y * 70}px, 0)`;
}

function getNextPosition(point: Point, impediments: Point[], maxX: number) {
  const movingPoint = [
    { ...point, x: point.x - 1 },
    { ...point, x: point.x + 1 },
    { ...point, y: point.y + 1 },
    { ...point, y: point.y - 1 },
  ]
    .filter(({ x, y }) => x > -1 && x < maxX && y > -1 && y < 2)
    .filter(
      ({ x, y }) => !impediments.some((point) => point.x === x && point.y === y)
    );

  if (Math.random() > 0.5) {
    movingPoint.sort(() => -1);
  }
  movingPoint.sort(() => Math.random() - 0.5);

  return movingPoint.pop() ?? point;
}
