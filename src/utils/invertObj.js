import { always, fromPairs, map, pipe, reverse, toPairs } from 'rambda';

export const invertObj = obj =>
  pipe(always(obj), toPairs, map(reverse), fromPairs)();
