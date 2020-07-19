import { always, fromPairs, map, pipe, reverse, toPairs } from 'rambda';
import { action, computed, decorate, observable } from 'mobx';

import { invert, keyC, min7_9, voicingToChord } from 'src/keyboard/constants';

export const invertObj = obj =>
  pipe(always(obj), toPairs, map(reverse), fromPairs)();

export class KeyboardStore {
  keyLetter = keyC;
  keySharp = false;
  keyFlat = false;

  inversion = 0;
  voicing = min7_9;
  octaveIdx = 0;

  setKeyLetter = keyLetter => {
    this.keyLetter = keyLetter;
  };

  setKeySharp = x => {
    this.keySharp = x;
    this.keyFlat = false;
  };

  setKeyFlat = x => {
    this.keyFlat = x;
    this.keySharp = false;
  };

  get chord() {
    return voicingToChord(
      invert(this.voicing, this.inversion),
      this.keySignature,
      this.octaveIdx
    );
  }

  get keySignature() {
    return this.keyLetter + (this.keySharp ? '#' : this.keyFlat ? 'b' : '');
  }

  get chordTitle() {
    return `${this.keySignature} Min7 9`;
  }
}

decorate(KeyboardStore, {
  inversion: observable,
  voicing: observable,
  octaveIdx: observable,
  keyLetter: observable,
  keySharp: observable,
  keyFlat: observable,
  setKeyLetter: action,
  setKeySharp: action,
  setKeyFlat: action,
  chord: computed,
  chordTitle: computed,
  keySignature: computed
});
