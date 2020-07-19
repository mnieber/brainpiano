import React from 'react';
import { always, map, pipe, range } from 'rambda';
import { Rect } from 'react-konva';

export const Marker = ({
  x,
  y,
  height,
  width,
  fill,
  backgroundColour,
  isStriped
}) => {
  const stripeHeight = 8;
  const nrOfStripes = Math.ceil(height / stripeHeight);

  return isStriped
    ? pipe(
        always(range(0, nrOfStripes)),
        map(stripeIdx => {
          return (
            <Rect
              key={stripeIdx}
              x={x + 1}
              y={y + stripeIdx * stripeHeight}
              fill={stripeIdx % 2 ? backgroundColour : fill}
              width={width - 2}
              height={stripeHeight}
              strokeWidth={0}
              opacity={1}
            />
          );
        })
      )()
    : [
        <Rect
          key={0}
          x={x + 1}
          y={y}
          fill={fill}
          width={width - 2}
          height={height}
          strokeWidth={0}
          opacity={1}
        />
      ];
};
