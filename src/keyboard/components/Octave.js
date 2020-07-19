import React from 'react';
import { observer } from 'mobx-react-lite';
import { always, concat, map, pipe, add } from 'rambda';
import { Layer } from 'react-konva';

import {
  blackKeyIdxs,
  keyPosToColour,
  keyPosToIdx,
  octaveRootKeyPos,
  whiteKeyIdxs
} from 'src/keyboard/constants';
import { Key } from 'src/keyboard/components/Key';

export const Octave = observer(({ idx, keySignature, chord }) => {
  const keyIdxs = concat(whiteKeyIdxs, blackKeyIdxs);
  const keys = pipe(
    always(keyIdxs),
    map(add(octaveRootKeyPos(idx))),
    map(keyPos => {
      const keyIdx = keyPosToIdx(keyPos);
      const [colour, isStriped] = keyPosToColour(keyPos, keySignature, chord);
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
});
