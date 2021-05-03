import { add, always, map, flow } from 'lodash/fp';

import { octaveRootNoteValue, clefOffsets } from 'src/keyboard/keyConstants';
import { VoicingT } from 'src/voicings/types';

export const voicingToChord = (
  voicing: VoicingT,
  clef: string,
  octaveIndex: number
) => {
  let rootNoteValue = octaveRootNoteValue(octaveIndex);
  const keyOffset = clefOffsets[clef];

  const result = flow(
    //
    always(voicing.chord),
    map(add(rootNoteValue + keyOffset))
  )();
  return result;
};
