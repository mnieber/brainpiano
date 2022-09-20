import { noteValueToIndex } from 'src/keyboard/keyConstants';
import { QueryT } from 'src/quiz/types';
import { mathMod } from 'src/utils/mathMod';
import { noteNameByValue } from 'src/voicings/noteConstants';

export const voicingTitleFromQuery = (query: QueryT) => {
  const noteIndex = mathMod(query.inversion, query.voicing.chord.length);
  const startNoteIdx = noteValueToIndex(query.voicing.chord[noteIndex]);
  const startNoteName = (noteNameByValue as any)[startNoteIdx];

  return `${query.clef} ${query.voicing.name} from ` + `${startNoteName}`;
};
