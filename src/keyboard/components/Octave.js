import { always, concat, map, pipe, add } from 'rambda';
import { Layer } from 'react-konva';
import React from 'react';

import {
  blackKeyIdxs,
  keyPosToColour,
  keyPosToIdx,
  octaveRootKeyPos,
  whiteKeyIdxs
} from 'src/keyboard/constants';
import { Key } from 'src/keyboard/components/Key';

export const Octave = ({ idx, chord }) => {
  const keyIdxs = concat(whiteKeyIdxs, blackKeyIdxs);
  const keys = pipe(
    always(keyIdxs),
    map(add(octaveRootKeyPos(idx))),
    map(keyPos => {
      const keyIdx = keyPosToIdx(keyPos);
      const [colour, isStriped] = keyPosToColour(keyPos, chord);
      return (
        <Key
          key={keyPos}
          idx={keyIdx}
          octaveIdx={idx}
          markerColour={colour}
          markerIsStriped={isStriped}
        />
      );
    })
  )();
  return <Layer>{keys}</Layer>;
};
