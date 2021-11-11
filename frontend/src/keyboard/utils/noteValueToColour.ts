import { head, includes, split } from 'ramda';
import { clefOffsets, noteValueToIndex } from 'src/keyboard/keyConstants';
import { noteColours } from 'src/keyboard/noteColours';
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
    ? head(split('-striped', harmonicColour ?? '')) ?? ''
    : harmonicColour;

  return { colour, isStriped };
}
