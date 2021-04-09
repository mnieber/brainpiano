import { always, fromPairs, map, flow, reverse, toPairs } from 'lodash/fp';

export const invertObj = (obj) =>
  flow(always(obj), toPairs, map(reverse), fromPairs)();
