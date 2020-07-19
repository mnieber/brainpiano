import {
  add,
  always,
  concat,
  includes,
  length,
  map,
  pipe,
  repeat,
  split,
  take,
  takeLast
} from 'rambda';

export const whiteKeyIdxs = [0, 2, 4, 5, 7, 9, 11];
export const blackKeyIdxs = [1, 3, 6, 8, 10];

export const root = 0;
export const flat9 = 1;
export const nine = 2;
export const sharp9 = 3;
export const flat3 = 3;
export const third = 4;
export const fourth = 5;
export const sharp4 = 6;
export const flat5 = 6;
export const fifth = 7;
export const sharpFive = 8;
export const flat6 = 8;
export const sixth = 9;
export const flat7 = 10;
export const seventh = 11;

export const min7_9 = [nine, flat3, fifth, flat7];
export const maj7_9 = [nine, third, fifth, seventh];
export const dom7_13 = [nine, third, sixth, flat7];
export const chromatic_scale = [
  flat9,
  nine,
  flat3,
  third,
  fourth,
  flat5,
  fifth,
  flat6,
  sixth,
  flat7,
  seventh
];

export const harmonicColours = {
  [root]: undefined,
  [flat9]: '#DB3010-striped',
  [nine]: '#DB3010',
  [flat3]: '#F48024-striped',
  [third]: '#F48024',
  [fourth]: '#FEE449', // yellow
  [flat5]: '#30AD23-striped',
  [fifth]: '#30AD23', // green
  [flat6]: '#36AFE2-striped',
  [sixth]: '#36AFE2', // blue
  [flat7]: 'violet-striped',
  [seventh]: 'violet'
};

export const keyC = 'c';
export const keyCSharp = 'c#';
export const keyD = 'd';
export const keyDSharp = 'd#';
export const keyE = 'e';
export const keyF = 'f';
export const keyFSharp = 'f#';
export const keyG = 'g';
export const keyGSharp = 'g#';
export const keyA = 'a';
export const keyASharp = 'a#';
export const keyB = 'b';

export const keySignatureOffsets = {
  [keyC]: 0,
  [keyCSharp]: 1,
  [keyD]: 2,
  [keyDSharp]: 3,
  [keyE]: 4,
  [keyF]: 5,
  [keyFSharp]: 6,
  [keyG]: 7,
  [keyGSharp]: 8,
  [keyA]: 9,
  [keyASharp]: 10,
  [keyB]: 11
};

export const invert = (voicing, pos) => {
  function rotate(arr) {
    const first = take(1, arr);
    const last = takeLast(length(arr) - 1, arr);
    return concat(last, first);
  }

  return pos === 0 ? voicing : pipe(always(voicing), ...repeat(rotate, pos))();
};

export const nrOkeysInOctave = 12;
export const octaveRootKeyPos = octaveIdx => octaveIdx * nrOkeysInOctave;
export const keyPosToIdx = keyPos => keyPos % nrOkeysInOctave;

export const keyPosToColour = (keyPos, keySignature, chord) => {
  const harmonicColour = includes(keyPos, chord)
    ? harmonicColours[keyPosToIdx(keyPos - keySignatureOffsets[keySignature])]
    : undefined;

  const isStriped = harmonicColour && harmonicColour.endsWith('-striped');
  const colour = isStriped
    ? split('-striped', harmonicColour)[0]
    : harmonicColour;

  return [colour, isStriped];
};

export const isWhiteKeyIdx = idx => includes(idx, whiteKeyIdxs);

export const voicingToChord = (voicing, keySignature, octaveIdx) => {
  let rootPos = octaveRootKeyPos(octaveIdx);
  let prev = undefined;

  const addRootPos = x => {
    if (prev !== undefined && x < prev) {
      rootPos += 12;
    }
    prev = x;
    return rootPos + x;
  };

  const keyOffset = keySignatureOffsets[keySignature];

  return pipe(
    //
    always(voicing),
    map(addRootPos),
    map(add(keyOffset))
  )();
};

export const keyLetters = [keyC, keyD, keyE, keyF, keyG, keyA, keyB];
