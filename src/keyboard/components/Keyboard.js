import 'src/keyboard/components/Keyboard.css';

import { Stage } from 'react-konva';
import { always, map, pipe, range } from 'rambda';
import React from 'react';

import { invert, min7_9, voicingToChord } from 'src/keyboard/constants';
import { Octave } from 'src/keyboard/components/Octave';

export const Keyboard = () => {
  const voicing = invert(min7_9, 3);
  const chord = voicingToChord(voicing, 0);
  const octaves = pipe(
    always(range(0, 3)),
    map(i => <Octave key={i} idx={i} chord={chord} />)
  )();
  return (
    <div className="Keyboard__frame">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        {octaves}
      </Stage>
    </div>
  );
};
