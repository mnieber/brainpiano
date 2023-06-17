import { observer } from 'mobx-react-lite';
import { add, always, concat, map, pipe } from 'ramda';
import { Layer } from 'react-konva';
import { Key } from '/src/keyboard/components/Key';
import {
  blackKeyIndexes,
  noteValueToIndex,
  octaveRootNoteValue,
  whiteKeyIndexes,
} from '/src/keyboard/keyConstants';
import { noteValueToColour } from '/src/keyboard/utils/noteValueToColour';

type PropsT = {
  index: number;
  clef: string;
  chord: any;
  scaleFactor: number;
  colouredNote?: number;
};

export const Octave = observer((props: PropsT) => {
  const keyIndexes = concat(whiteKeyIndexes, blackKeyIndexes);
  const keys = pipe(
    always(keyIndexes),
    map(add(octaveRootNoteValue(props.index))),
    map((noteValue) => {
      const keyIndex = noteValueToIndex(noteValue);
      const { colour, isStriped } = noteValueToColour(
        noteValue,
        props.clef,
        props.chord,
        props.colouredNote
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
