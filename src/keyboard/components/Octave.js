import React from 'react';
import { observer } from 'mobx-react-lite';
import { always, concat, map, pipe, add } from 'rambda';
import { Layer } from 'react-konva';

import {
  blackKeyIndexes,
  noteValueToIndex,
  octaveRootNoteValue,
  whiteKeyIndexes
} from 'src/keyboard/piano_key_constants';
import { noteValueToColour } from 'src/utils/keyPosToColour';
import { Key } from 'src/keyboard/components/Key';

export const Octave = observer(({ index, keySignature, chord }) => {
  const keyIndexes = concat(whiteKeyIndexes, blackKeyIndexes);
  const keys = pipe(
    always(keyIndexes),
    map(add(octaveRootNoteValue(index))),
    map(noteValue => {
      const keyIndex = noteValueToIndex(noteValue);
      const [colour, isStriped] = noteValueToColour(
        noteValue,
        keySignature,
        chord
      );
      return (
        <Key
          key={noteValue}
          index={keyIndex}
          octaveIndex={index}
          markerColour={colour}
          markerIsStriped={isStriped}
        />
      );
    })
  )();
  return <Layer>{keys}</Layer>;
});
