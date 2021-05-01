import {
  add,
  always,
  concat,
  map,
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
    const first = take(1, arr);
    const last = takeRight(size(arr) - 1, arr);
    return concat(last, map(add(12), first));
  }

  const result =
    pos === 0 ? chord : flow(always(chord), ...times(constant(rotate), pos))();
  return result;
};
