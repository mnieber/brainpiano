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

export const invertVoicing = (voicing, pos) => {
  function rotate(arr) {
    const first = take(1, arr);
    const last = takeRight(size(arr) - 1, arr);
    return concat(last, first);
  }

  const result =
    pos === 0
      ? voicing
      : flow(always(voicing), ...times(constant(rotate), pos))();
  return result;
};
