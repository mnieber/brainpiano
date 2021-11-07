import { always, flow, map, range } from 'lodash/fp';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Rect } from 'react-konva';

type PropsT = {
  offsetX: number;
  offsetY: number;
  height: number;
  width: number;
  fill: any;
  backgroundColour: any;
  isStriped: boolean;
};

export const Marker: React.FC<PropsT> = observer((props: PropsT) => {
  const filledStripeHeight = 5;
  const bgStripeHeight = 3.5;
  const nrOfStripes = Math.ceil(
    props.height / (filledStripeHeight + bgStripeHeight)
  );

  return props.isStriped
    ? (flow(
        always(range(0, nrOfStripes)),
        map((stripeIdx) => {
          const y = stripeIdx * (filledStripeHeight + bgStripeHeight);
          const height = Math.min(filledStripeHeight, props.height - y);

          return (
            <Rect
              key={stripeIdx}
              x={props.offsetX + 1}
              y={props.offsetY + y}
              fill={props.fill}
              width={props.width - 2}
              height={height}
              strokeWidth={0}
              opacity={1}
            />
          );
        })
      )() as any)
    : ([
        <Rect
          key={0}
          x={props.offsetX + 1}
          y={props.offsetY}
          fill={props.fill}
          width={props.width - 2}
          height={props.height}
          strokeWidth={0}
          opacity={1}
        />,
      ] as any);
});
