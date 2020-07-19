import { always, indexOf, map, pipe, range } from 'rambda';
import React from 'react';
import { Rect } from 'react-konva';

import {
  blackKeyIdxs,
  isWhiteKeyIdx,
  whiteKeyIdxs
} from 'src/keyboard/constants';
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

const getKeyX = keyIdx => {
  const isWhiteKey = isWhiteKeyIdx(keyIdx);
  const keyX = isWhiteKey ? whiteKeyX : blackKeyX;
  const keyIdxs = isWhiteKey ? whiteKeyIdxs : blackKeyIdxs;
  return keyX[indexOf(keyIdx, keyIdxs)];
};

export const Key = ({ idx, octaveIdx, markerColour, markerIsStriped }) => {
  const isWhiteKey = isWhiteKeyIdx(idx);
  const keyProps = isWhiteKey ? whiteKeyProps : blackKeyProps;

  const offsetY = 50;
  const offsetX = octaveIdx * 7 * whiteKeyProps.width;

  const x = offsetX + getKeyX(idx);

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
