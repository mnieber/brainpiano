import { observer } from 'mobx-react-lite';
import { always, indexOf, map, pipe, range } from 'ramda';
import React from 'react';
import { Rect } from 'react-konva';
import { Marker } from 'src/keyboard/components/Marker';
import {
  blackKeyIndexes,
  isWhiteKeyIndex,
  whiteKeyIndexes,
} from 'src/keyboard/keyConstants';

const whiteKeyProps = {
  width: 50,
  height: 250,
  fill: '#FFFFFF',
  markerHeight: 56,
};

const blackKeyProps = {
  width: 25,
  height: 160,
  fill: '#444444',
  markerHeight: 100,
};

const whiteKeyX = pipe(
  always(range(0, 7)),
  map((i) => i * whiteKeyProps.width)
)();

const fraction = (x: number) => x * blackKeyProps.width;
const blackKeyX = [
  whiteKeyX[1] - fraction(0.66),
  whiteKeyX[2] - fraction(0.33),
  whiteKeyX[4] - fraction(0.7),
  whiteKeyX[5] - fraction(0.5),
  whiteKeyX[6] - fraction(0.3),
];

const getKeyX = (keyIndex: number) => {
  const isWhiteKey = isWhiteKeyIndex(keyIndex);
  const keyX = isWhiteKey ? whiteKeyX : blackKeyX;
  const keyIndexes = isWhiteKey ? whiteKeyIndexes : blackKeyIndexes;
  return keyX[indexOf(keyIndex, keyIndexes)];
};

type PropsT = {
  index: number;
  octaveIndex: number;
  markerColour?: string;
  markerIsStriped: boolean;
  scaleFactor: number;
};

export const Key = observer((props: PropsT) => {
  const isWhiteKey = isWhiteKeyIndex(props.index);
  const keyProps = isWhiteKey ? whiteKeyProps : blackKeyProps;

  const offsetY = 0;
  const markerOffsetY = isWhiteKey ? 3 : 2;
  const offsetX = props.octaveIndex * 7 * whiteKeyProps.width;

  const x = offsetX + getKeyX(props.index);

  return (
    <React.Fragment>
      <Rect
        x={x * props.scaleFactor}
        y={offsetY * props.scaleFactor}
        fill={keyProps.fill}
        stroke="#000000"
        opacity={1}
        width={keyProps.width * props.scaleFactor}
        height={keyProps.height * props.scaleFactor}
      />
      <Marker
        offsetX={(x + 2) * props.scaleFactor}
        offsetY={
          (offsetY + keyProps.height - keyProps.markerHeight - markerOffsetY) *
          props.scaleFactor
        }
        height={keyProps.markerHeight * props.scaleFactor}
        width={(keyProps.width - 4) * props.scaleFactor}
        fill={props.markerColour}
        isStriped={props.markerIsStriped}
        backgroundColour={keyProps.fill}
      />
    </React.Fragment>
  );
});
