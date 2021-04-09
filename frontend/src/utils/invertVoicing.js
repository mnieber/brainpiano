import { always, concat, size, flow, repeat, take, takeLast } from 'lodash/fp';

export const invertVoicing = (voicing, pos) => {
  function rotate(arr) {
    const first = take(1, arr);
    const last = takeLast(size(arr) - 1, arr);
    return concat(last, first);
  }

  return pos === 0 ? voicing : flow(always(voicing), ...repeat(rotate, pos))();
};
