import { add, always, map, pipe } from 'rambda';

import { octaveRootNoteValue } from 'src/keyboard/piano_key_constants';
import { keySignatureOffsets } from 'src/keyboard/key_signature_constants';
import { noteNameToIndex } from 'src/keyboard/note_constants';

export const voicingToChord = (voicing, keySignature, octaveIndex) => {
  let rootNoteValue = octaveRootNoteValue(octaveIndex);
  let prev = undefined;

  const addRootNoteValue = x => {
    if (prev !== undefined && x < prev) {
      rootNoteValue += 12;
    }
    prev = x;
    return rootNoteValue + x;
  };

  const keyOffset = keySignatureOffsets[keySignature];

  const result = pipe(
    //
    always(voicing),
    map(x => noteNameToIndex[x]),
    map(addRootNoteValue),
    map(add(keyOffset))
  )();
  return result;
};
