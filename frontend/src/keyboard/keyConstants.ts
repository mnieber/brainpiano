import { includes } from 'lodash/fp';
import { mathMod } from 'src/utils/mathMod';

export const clefC = 'C';
export const clefCSharp = 'C#';
export const clefCFlat = 'Cb';
export const clefD = 'D';
export const clefDSharp = 'D#';
export const clefDFlat = 'Db';
export const clefE = 'E';
export const clefESharp = 'E#';
export const clefEFlat = 'Eb';
export const clefF = 'F';
export const clefFSharp = 'F#';
export const clefFFlat = 'Fb';
export const clefG = 'G';
export const clefGSharp = 'G#';
export const clefGFlat = 'Gb';
export const clefA = 'A';
export const clefASharp = 'A#';
export const clefAFlat = 'Ab';
export const clefB = 'B';
export const clefBSharp = 'B#';
export const clefBFlat = 'Bb';

export const clefs = [
  'C',
  'C#',
  'D',
  'Eb',
  'E',
  'F',
  'F#',
  'G',
  'Ab',
  'A',
  'Bb',
  'B',
];

export const clefOffsets: { [key: string]: number } = {
  [clefCFlat]: 11,
  [clefC]: 0,
  [clefCSharp]: 1,
  [clefDFlat]: 1,
  [clefD]: 2,
  [clefDSharp]: 3,
  [clefEFlat]: 3,
  [clefE]: 4,
  [clefESharp]: 5,
  [clefFFlat]: 4,
  [clefF]: 5,
  [clefFSharp]: 6,
  [clefGFlat]: 6,
  [clefG]: 7,
  [clefGSharp]: 8,
  [clefAFlat]: 8,
  [clefA]: 9,
  [clefASharp]: 10,
  [clefBFlat]: 10,
  [clefB]: 11,
  [clefBSharp]: 0,
};

export const clefLetters = [clefC, clefD, clefE, clefF, clefG, clefA, clefB];

export const whiteKeyIndexes = [0, 2, 4, 5, 7, 9, 11];
export const blackKeyIndexes = [1, 3, 6, 8, 10];

export const isWhiteKeyIndex = (keyIndex: number) =>
  includes(keyIndex, whiteKeyIndexes);

export const nrOfNotesInOctave = 12;
export const octaveRootNoteValue = (octaveIndex: number) =>
  octaveIndex * nrOfNotesInOctave;
export const noteValueToIndex = (noteValue: number) =>
  mathMod(noteValue, nrOfNotesInOctave);
