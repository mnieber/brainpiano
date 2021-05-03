import {
  always,
  concat,
  size,
  flow,
  times,
  constant,
  take,
  takeRight,
} from 'lodash/fp';
import { ChordT } from 'src/voicings/types';

export const invertChord = (chord: ChordT, pos: number) => {
  function rotate(arr: ChordT) {
    const maxNote = arr[arr.length - 1];
    let first = take(1, arr);
    const last = takeRight(size(arr) - 1, arr);
    while (first[0] <= maxNote) {
      first[0] += 12;
    }
    return concat(last, first);
  }

  function rotateBack(arr: ChordT) {
    const minNote = arr[0];
    let last = takeRight(1, arr);
    const first = take(size(arr) - 1, arr);
    while (last[0] >= minNote) {
      last[0] -= 12;
    }
    return concat(last, first);
  }

  const result =
    pos === 0
      ? chord
      : pos > 0
      ? flow(always(chord), ...times(constant(rotate), pos))()
      : flow(always(chord), ...times(constant(rotateBack), Math.abs(pos)))();
  return result;
};

export const getInversionRange = (chord: ChordT) => {
  const topC = 48;
  let minInversion = 0;
  let maxInversion = 0;
  const l = chord.length;

  while (invertChord(chord, maxInversion + 1)[l - 1] < topC) {
    maxInversion += 1;
  }

  while (invertChord(chord, minInversion - 1)[0] >= 0) {
    minInversion -= 1;
  }

  return [minInversion, maxInversion];
};
