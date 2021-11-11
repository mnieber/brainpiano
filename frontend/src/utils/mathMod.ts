export const mathMod = (m: number, p: number) => {
  if (!Number.isInteger(m)) {
    return NaN;
  }
  if (!Number.isInteger(p) || p < 1) {
    return NaN;
  }
  return ((m % p) + p) % p;
};
