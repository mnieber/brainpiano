import { add, always, map, pipe } from 'ramda';
import { clefOffsets, octaveRootNoteValue } from 'src/keyboard/keyConstants';
import { VoicingT } from 'src/voicings/types';

export const voicingToChord = (
  voicing: VoicingT,
  clef: string,
  octaveIndex: number
) => {
  let rootNoteValue = octaveRootNoteValue(octaveIndex);
  const keyOffset = clefOffsets[clef];

  const result = pipe(
    //
    always(voicing.chord),
    map(add(rootNoteValue + keyOffset))
  )();
  return result;
};
