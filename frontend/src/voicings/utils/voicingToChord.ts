import { add, always, map, flow } from 'lodash/fp';

import { octaveRootNoteValue, clefOffsets } from 'src/keyboard/keyConstants';
import { VoicingT } from 'src/voicings/types';

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

  const result = flow(
    //
    always(voicing.chord),
    map(addRootNoteValue),
    map(add(keyOffset))
  )();
  return result;
};
