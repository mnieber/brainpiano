import 'src/keyboard/components/Keyboard.css';

import { Stage } from 'react-konva';
import { always, map, pipe, range } from 'rambda';
import React from 'react';

import {
  invert,
  maj7_9,
  min7_9,
  dom7_13,
  chromatic_scale
} from 'src/keyboard/constants';
import { Octave } from 'src/keyboard/components/Octave';

export const Keyboard = () => {
  const chord = invert(min7_9, 0);
  const octaves = pipe(
    always(range(0, 3)),
    map(i => <Octave idx={i} key={i} chord={i === 1 ? chord : []} />)
  )();
  return (
    <div className="Keyboard__frame">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        {octaves}
      </Stage>
    </div>
  );
};
