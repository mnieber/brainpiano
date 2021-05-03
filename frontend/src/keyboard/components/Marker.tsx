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
  const filledStripeHeight = 5;
  const bgStripeHeight = 3.5;
  const nrOfStripes = Math.floor(
    props.height / (0.5 * (filledStripeHeight + bgStripeHeight))
  );

  return props.isStriped
    ? (flow(
        always(range(0, nrOfStripes)),
        map((stripeIdx) => {
          const nrBg = Math.floor(stripeIdx / 2);
          const nrFilled = stripeIdx - nrBg;
          const isFilled = stripeIdx % 2 == 0;
          const y =
            props.y + nrFilled * filledStripeHeight + nrBg * bgStripeHeight;
          const height = isFilled ? filledStripeHeight : bgStripeHeight;

          return (
            <Rect
              key={stripeIdx}
              x={props.x + 1}
              y={y}
              fill={isFilled ? props.fill : props.backgroundColour}
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
