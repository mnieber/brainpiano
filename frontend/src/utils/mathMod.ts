import { isInteger } from 'lodash/fp';

export const mathMod = (m: number, p: number) => {
  if (!isInteger(m)) {
    return NaN;
  }
  if (!isInteger(p) || p < 1) {
    return NaN;
  }
  return ((m % p) + p) % p;
};
