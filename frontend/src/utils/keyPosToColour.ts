import { includes, split } from 'lodash/fp';

import { noteColours } from 'src/keyboard/noteColours';
import { noteValueToIndex } from 'src/keyboard/piano_key_constants';
import { keySignatureOffsets } from 'src/keyboard/key_signature_constants';
import { ChordT, NoteT } from 'src/voicings/types';

export function noteValueToColour(
  noteValue: NoteT,
  keySignature: string,
  chord: ChordT
) {
  const harmonicColour = includes(noteValue, chord)
    ? noteColours[
        noteValueToIndex(noteValue - keySignatureOffsets[keySignature])
      ]
    : undefined;

  const isStriped = !!(harmonicColour && harmonicColour.endsWith('-striped'));
  const colour = isStriped
    ? split('-striped', harmonicColour)[0]
    : harmonicColour;

  return { colour, isStriped };
}
