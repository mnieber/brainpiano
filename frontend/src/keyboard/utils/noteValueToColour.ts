import { head, includes, split } from 'ramda';
import { clefOffsets, noteValueToIndex } from '/src/keyboard/keyConstants';
import { noteColours } from '/src/keyboard/noteColours';
import { ChordT, NoteT } from '/src/voicings/types';

export function noteValueToColour(
  noteValue: NoteT,
  clef: string,
  chord: ChordT,
  colouredNote?: number
) {
  const chordHasNote = includes(noteValue, chord);
  const useColour = !colouredNote || colouredNote === noteValue;

  const harmonicColour =
    chordHasNote && useColour
      ? noteColours[noteValueToIndex(noteValue - clefOffsets[clef])]
      : chordHasNote && !useColour
      ? '#aaaaaa'
      : undefined;

  const isStriped = !!(harmonicColour && harmonicColour.endsWith('-striped'));
  const colour = isStriped
    ? head(split('-striped', harmonicColour ?? '')) ?? ''
    : harmonicColour;

  return { colour, isStriped };
}
