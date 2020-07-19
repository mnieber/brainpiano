import { includes, split } from 'rambda';

import { noteColours } from 'src/keyboard/note_constants';
import { noteValueToIndex } from 'src/keyboard/piano_key_constants';
import { keySignatureOffsets } from 'src/keyboard/key_signature_constants';

export const noteValueToColour = (noteValue, keySignature, chord) => {
  const harmonicColour = includes(noteValue, chord)
    ? noteColours[
        noteValueToIndex(noteValue - keySignatureOffsets[keySignature])
      ]
    : undefined;

  const isStriped = harmonicColour && harmonicColour.endsWith('-striped');
  const colour = isStriped
    ? split('-striped', harmonicColour)[0]
    : harmonicColour;

  return [colour, isStriped];
};
