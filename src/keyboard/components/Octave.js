import { always, concat, includes, map, pipe } from 'rambda';
import { Layer } from 'react-konva';
import React from 'react';

import {
  blackKeyIdxs,
  whiteKeyIdxs,
  harmonicColours
} from 'src/keyboard/constants';
import { Key } from 'src/keyboard/components/Key';

export const Octave = ({ idx, chord }) => {
  const shift = 1; // HACK
  const idxs = concat(whiteKeyIdxs, blackKeyIdxs);
  const keys = pipe(
    always(idxs),
    map(keyIdx => {
      const harmonicColour = includes(keyIdx + shift, chord)
        ? harmonicColours[keyIdx + shift]
        : undefined;
      return (
        <Key
          key={keyIdx}
          idx={keyIdx}
          octaveIdx={idx}
          harmonicColour={harmonicColour}
        />
      );
    })
  )();
  return <Layer>{keys}</Layer>;
};
