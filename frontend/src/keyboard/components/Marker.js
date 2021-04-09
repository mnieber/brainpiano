import React from 'react';
import { observer } from 'mobx-react-lite';
import { always, map, flow, range } from 'lodash/fp';
import { Rect } from 'react-konva';

export const Marker = observer(
  ({ x, y, height, width, fill, backgroundColour, isStriped }) => {
    const stripeHeight = 8;
    const nrOfStripes = Math.ceil(height / stripeHeight);

    return isStriped
      ? flow(
          always(range(0, nrOfStripes)),
          map((stripeIdx) => {
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
          />,
        ];
  }
);