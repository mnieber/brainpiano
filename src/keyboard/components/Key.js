import { always, indexOf, map, pipe, range } from 'rambda';
import React from 'react';
import { Rect } from 'react-konva';

import {
  blackKeyIndexes,
  isWhiteKeyIndex,
  whiteKeyIndexes
} from 'src/keyboard/piano_key_constants';
import { Marker } from 'src/keyboard/components/Marker';

const whiteKeyProps = {
  width: 50,
  height: 250,
  fill: '#FFFFFF',
  markerHeight: 56
};

const blackKeyProps = {
  width: 25,
  height: 160,
  fill: '#444444',
  markerHeight: 100
};

const whiteKeyX = pipe(
  always(range(0, 7)),
  map(i => i * whiteKeyProps.width)
)();

const fraction = x => x * blackKeyProps.width;
const blackKeyX = [
  whiteKeyX[1] - fraction(0.66),
  whiteKeyX[2] - fraction(0.33),
  whiteKeyX[4] - fraction(0.7),
  whiteKeyX[5] - fraction(0.5),
  whiteKeyX[6] - fraction(0.3)
];

const getKeyX = keyIndex => {
  const isWhiteKey = isWhiteKeyIndex(keyIndex);
  const keyX = isWhiteKey ? whiteKeyX : blackKeyX;
  const keyIndexes = isWhiteKey ? whiteKeyIndexes : blackKeyIndexes;
  return keyX[indexOf(keyIndex, keyIndexes)];
};

export const Key = ({ index, octaveIndex, markerColour, markerIsStriped }) => {
  const isWhiteKey = isWhiteKeyIndex(index);
  const keyProps = isWhiteKey ? whiteKeyProps : blackKeyProps;

  const offsetY = 50;
  const offsetX = octaveIndex * 7 * whiteKeyProps.width;

  const x = offsetX + getKeyX(index);

  return (
    <React.Fragment>
      <Rect
        x={x}
        y={offsetY}
        fill={keyProps.fill}
        stroke="#000000"
        opacity={1}
        width={keyProps.width}
        height={keyProps.height}
      />
      <Marker
        x={x}
        y={offsetY + keyProps.height - keyProps.markerHeight}
        height={keyProps.markerHeight}
        width={keyProps.width}
        fill={markerColour}
        isStriped={markerIsStriped}
        backgroundColour={keyProps.fill}
      />
    </React.Fragment>
  );
};
