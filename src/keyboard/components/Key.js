import { always, includes, indexOf, map, pipe, range, split } from 'rambda';
import React from 'react';
import { Rect } from 'react-konva';

import { whiteKeyIdxs, blackKeyIdxs } from 'src/keyboard/constants';

export const Key = ({ idx, octaveIdx, harmonicColour }) => {
  const whiteKey = {
    width: 50,
    height: 250,
    fill: '#FFFFFF',
    markerHeight: 56
  };

  const blackKey = {
    width: 25,
    height: 160,
    fill: '#444444',
    markerHeight: 100
  };

  const whiteKeyPos = pipe(
    always(range(0, 7)),
    map(i => i * whiteKey.width)
  )();

  const fraction = x => x * blackKey.width;
  const blackKeyPos = [
    whiteKeyPos[1] - fraction(0.66),
    whiteKeyPos[2] - fraction(0.33),
    whiteKeyPos[4] - fraction(0.7),
    whiteKeyPos[5] - fraction(0.5),
    whiteKeyPos[6] - fraction(0.3)
  ];

  const isWhiteKey = includes(idx, whiteKeyIdxs);
  const keyIdxs = isWhiteKey ? whiteKeyIdxs : blackKeyIdxs;

  const key = isWhiteKey ? whiteKey : blackKey;
  const keyPos = isWhiteKey ? whiteKeyPos : blackKeyPos;

  const keyIdx = indexOf(idx, keyIdxs);

  const offsetX = octaveIdx * 7 * whiteKey.width;
  const offsetY = 50;

  const stripeHeight = 8;

  const isStriped = harmonicColour && harmonicColour.endsWith('-striped');
  const colour = isStriped
    ? split('-striped', harmonicColour)[0]
    : harmonicColour;

  const nrOfStripes = Math.ceil(key.markerHeight / stripeHeight);

  const markers = isStriped
    ? pipe(
        always(range(0, nrOfStripes)),
        map(idx => {
          return (
            <Rect
              key={idx}
              x={offsetX + keyPos[keyIdx] + 1}
              y={offsetY + key.height - key.markerHeight + idx * stripeHeight}
              fill={idx % 2 ? key.fill : colour}
              strokeWidth={0}
              opacity={1}
              width={key.width - 2}
              height={stripeHeight}
            />
          );
        })
      )()
    : [
        <Rect
          key={idx}
          x={offsetX + keyPos[keyIdx] + 1}
          y={offsetY + key.height - key.markerHeight}
          fill={colour}
          strokeWidth={0}
          opacity={1}
          width={key.width - 2}
          height={key.markerHeight}
        />
      ];

  return (
    <React.Fragment>
      <Rect
        x={offsetX + keyPos[keyIdx]}
        y={offsetY}
        fill={key.fill}
        stroke="#000000"
        opacity={1}
        width={key.width}
        height={key.height}
      />
      {markers}
    </React.Fragment>
  );
};
