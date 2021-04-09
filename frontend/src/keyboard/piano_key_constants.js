import { includes } from 'lodash/fp';

export const whiteKeyIndexes = [0, 2, 4, 5, 7, 9, 11];
export const blackKeyIndexes = [1, 3, 6, 8, 10];

export const isWhiteKeyIndex = (keyIndex) =>
  includes(keyIndex, whiteKeyIndexes);

export const nrOfNotesInOctave = 12;
export const octaveRootNoteValue = (octaveIndex) =>
  octaveIndex * nrOfNotesInOctave;
export const noteValueToIndex = (noteValue) => noteValue % nrOfNotesInOctave;
