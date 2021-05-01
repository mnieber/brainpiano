import React from 'react';
import { observer } from 'mobx-react-lite';
import { always, concat, map, flow, add } from 'lodash/fp';
import { Layer } from 'react-konva';

import {
  blackKeyIndexes,
  noteValueToIndex,
  octaveRootNoteValue,
  whiteKeyIndexes,
} from 'src/keyboard/keyConstants';
import { noteValueToColour } from 'src/keyboard/utils/noteValueToColour';
import { Key } from 'src/keyboard/components/Key';

type PropsT = {
  index: number;
  keySignature: string;
  chord: any;
};

export const Octave = observer((props: PropsT) => {
  const keyIndexes = concat(whiteKeyIndexes, blackKeyIndexes);
  const keys = flow(
    always(keyIndexes),
    map(add(octaveRootNoteValue(props.index))),
    map((noteValue) => {
      const keyIndex = noteValueToIndex(noteValue);
      const { colour, isStriped } = noteValueToColour(
        noteValue,
        props.keySignature,
        props.chord
      );
      return (
        <Key
          key={noteValue}
          index={keyIndex}
          octaveIndex={props.index}
          markerColour={colour}
          markerIsStriped={isStriped}
        />
      );
    })
  )();
  return <Layer>{keys}</Layer>;
});
