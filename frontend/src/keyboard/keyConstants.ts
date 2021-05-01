import { includes } from 'lodash/fp';

export const keyC = 'C';
export const keyCSharp = 'C#';
export const keyCFlat = 'Cb';
export const keyD = 'D';
export const keyDSharp = 'D#';
export const keyDFlat = 'Db';
export const keyE = 'E';
export const keyESharp = 'E#';
export const keyEFlat = 'Eb';
export const keyF = 'F';
export const keyFSharp = 'F#';
export const keyFFlat = 'Fb';
export const keyG = 'G';
export const keyGSharp = 'G#';
export const keyGFlat = 'Gb';
export const keyA = 'A';
export const keyASharp = 'A#';
export const keyAFlat = 'Ab';
export const keyB = 'B';
export const keyBSharp = 'B#';
export const keyBFlat = 'Bb';

export const keySignatureOffsets: { [key: string]: number } = {
  [keyCFlat]: 11,
  [keyC]: 0,
  [keyCSharp]: 1,
  [keyDFlat]: 1,
  [keyD]: 2,
  [keyDSharp]: 3,
  [keyEFlat]: 3,
  [keyE]: 4,
  [keyESharp]: 5,
  [keyFFlat]: 4,
  [keyF]: 5,
  [keyFSharp]: 6,
  [keyGFlat]: 6,
  [keyG]: 7,
  [keyGSharp]: 8,
  [keyAFlat]: 8,
  [keyA]: 9,
  [keyASharp]: 10,
  [keyBFlat]: 10,
  [keyB]: 11,
  [keyBSharp]: 0,
};

export const keyLetters = [keyC, keyD, keyE, keyF, keyG, keyA, keyB];

export const whiteKeyIndexes = [0, 2, 4, 5, 7, 9, 11];
export const blackKeyIndexes = [1, 3, 6, 8, 10];

export const isWhiteKeyIndex = (keyIndex: number) =>
  includes(keyIndex, whiteKeyIndexes);

export const nrOfNotesInOctave = 12;
export const octaveRootNoteValue = (octaveIndex: number) =>
  octaveIndex * nrOfNotesInOctave;
export const noteValueToIndex = (noteValue: number) =>
  noteValue % nrOfNotesInOctave;
