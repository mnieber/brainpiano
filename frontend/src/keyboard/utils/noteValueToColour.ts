import { includes, split } from 'lodash/fp';

import { noteColours } from 'src/keyboard/noteColours';
import { noteValueToIndex, clefOffsets } from 'src/keyboard/keyConstants';
import { ChordT, NoteT } from 'src/voicings/types';

export function noteValueToColour(
  noteValue: NoteT,
  clef: string,
  chord: ChordT
) {
  const harmonicColour = includes(noteValue, chord)
    ? noteColours[noteValueToIndex(noteValue - clefOffsets[clef])]
    : undefined;

  const isStriped = !!(harmonicColour && harmonicColour.endsWith('-striped'));
  const colour = isStriped
    ? split('-striped', harmonicColour)[0]
    : harmonicColour;

  return { colour, isStriped };
}
