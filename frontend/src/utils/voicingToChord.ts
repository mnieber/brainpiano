import { add, always, map, flow } from 'lodash/fp';

import { octaveRootNoteValue } from 'src/keyboard/piano_key_constants';
import { keySignatureOffsets } from 'src/keyboard/key_signature_constants';
import { VoicingT } from 'src/voicings/types';

export const voicingToChord = (
  voicing: VoicingT,
  keySignature: string,
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

  const keyOffset = keySignatureOffsets[keySignature];

  const result = flow(
    //
    always(voicing.chord),
    map(addRootNoteValue),
    map(add(keyOffset))
  )();
  return result;
};
