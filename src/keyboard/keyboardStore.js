import {
  always,
  fromPairs,
  length,
  map,
  mathMod,
  pipe,
  reverse,
  toPairs
} from 'rambda';
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
  octaveIdx = 1;
  octaveIdxDelta = 0;

  setKeyLetter = keyLetter => {
    this.keyLetter = keyLetter;
  };

  setKeySharp = x => {
    this.keySharp = x;
    this.keyFlat = false;
  };

  setInversion = x => {
    const maxInversion = this.nrOfVoices;
    const minInversion = -1 * this.nrOfVoices;
    this.inversion =
      x <= minInversion ? minInversion : x >= maxInversion ? maxInversion : x;
    this.octaveIdxDelta =
      this.inversion >= this.nrOfVoices ? 1 : this.inversion < 0 ? -1 : 0;
  };

  setKeyFlat = x => {
    this.keyFlat = x;
    this.keySharp = false;
  };

  get nrOfVoices() {
    return length(this.voicing);
  }

  get chord() {
    return voicingToChord(
      invert(this.voicing, mathMod(this.inversion, this.nrOfVoices)),
      this.keySignature,
      this.octaveIdx + this.octaveIdxDelta
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
  setInversion: action,
  chord: computed,
  chordTitle: computed,
  keySignature: computed,
  nrOfVoices: computed
});
