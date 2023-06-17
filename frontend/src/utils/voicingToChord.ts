import { add, always, map, pipe } from 'ramda';
import { clefOffsets, octaveRootNoteValue } from '/src/keyboard/keyConstants';
import { VoicingT } from '/src/voicings/types';

export const voicingToChord = (
  voicing: VoicingT,
  clef: string,
  octaveIndex: number
) => {
  let rootNoteValue = octaveRootNoteValue(octaveIndex);
  let prev: number | undefined = undefined;

  const addRootNoteValue = (x: number) => {
    if (prev !== undefined && x < prev) {
      rootNoteValue += 12;
    }
    prev = x;
    return rootNoteValue + x;
  };

  const keyOffset = clefOffsets[clef];

  const result = pipe(
    //
    always(voicing.chord),
    map(addRootNoteValue),
    map(add(keyOffset))
  )();
  return result;
};
