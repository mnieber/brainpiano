import { always, concat, last, length, pipe, take, takeLast } from 'rambda';

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

export const invert = (chord, pos) => {
  function rotate(arr) {
    const last = takeLast(1, arr);
    const first = take(length(arr) - 1, arr);
    return concat(last, first);
  }

  return pos === 0 ? chord : pipe(always(chord), rotate, last)();
};