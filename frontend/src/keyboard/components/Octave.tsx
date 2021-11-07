import { add, always, concat, flow, map } from 'lodash/fp';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Layer } from 'react-konva';
import { Key } from 'src/keyboard/components/Key';
import {
  blackKeyIndexes,
  noteValueToIndex,
  octaveRootNoteValue,
  whiteKeyIndexes,
} from 'src/keyboard/keyConstants';
import { noteValueToColour } from 'src/keyboard/utils/noteValueToColour';

type PropsT = {
  index: number;
  clef: string;
  chord: any;
  scaleFactor: number;
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
        props.clef,
        props.chord
      );
      return (
        <Key
          key={noteValue}
          index={keyIndex}
          octaveIndex={props.index}
          markerColour={colour}
          markerIsStriped={isStriped}
          scaleFactor={props.scaleFactor}
        />
      );
    })
  )();
  return <Layer>{keys}</Layer>;
});
