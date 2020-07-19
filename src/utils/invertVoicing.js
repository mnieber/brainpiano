import { always, concat, length, pipe, repeat, take, takeLast } from 'rambda';

export const invertVoicing = (voicing, pos) => {
  function rotate(arr) {
    const first = take(1, arr);
    const last = takeLast(length(arr) - 1, arr);
    return concat(last, first);
  }

  return pos === 0 ? voicing : pipe(always(voicing), ...repeat(rotate, pos))();
};
