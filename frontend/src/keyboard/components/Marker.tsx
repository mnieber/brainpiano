import React from 'react';
import { observer } from 'mobx-react-lite';
import { always, map, flow, range } from 'lodash/fp';
import { Rect } from 'react-konva';

type PropsT = {
  x: number;
  y: number;
  height: number;
  width: number;
  fill: any;
  backgroundColour: any;
  isStriped: boolean;
};

export const Marker: React.FC<PropsT> = observer((props: PropsT) => {
  const stripeHeight = 6.5;
  const nrOfStripes = Math.ceil(props.height / stripeHeight);

  return props.isStriped
    ? (flow(
        always(range(0, nrOfStripes)),
        map((stripeIdx) => {
          return (
            <Rect
              key={stripeIdx}
              x={props.x + 1}
              y={props.y + stripeIdx * stripeHeight}
              fill={stripeIdx % 2 ? props.backgroundColour : props.fill}
              width={props.width - 2}
              height={stripeHeight}
              strokeWidth={0}
              opacity={1}
            />
          );
        })
      )() as any)
    : ([
        <Rect
          key={0}
          x={props.x + 1}
          y={props.y}
          fill={props.fill}
          width={props.width - 2}
          height={props.height}
          strokeWidth={0}
          opacity={1}
        />,
      ] as any);
});
