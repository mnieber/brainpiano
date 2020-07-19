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

import { invert, min7_9, voicingToChord } from 'src/keyboard/constants';

export const invertObj = obj =>
  pipe(always(obj), toPairs, map(reverse), fromPairs)();

export class ChordStore {
  keySignature = undefined;
  inversion = 0;
  voicing = min7_9;
  octaveIdx = 1;
  octaveIdxDelta = 0;

  setInversion = x => {
    const maxInversion = this.nrOfVoices;
    const minInversion = -1 * this.nrOfVoices;
    this.inversion =
      x <= minInversion ? minInversion : x >= maxInversion ? maxInversion : x;
    this.octaveIdxDelta =
      this.inversion >= this.nrOfVoices ? 1 : this.inversion < 0 ? -1 : 0;
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

  get chordTitle() {
    return `${this.keySignature} Min7 9`;
  }
}

decorate(ChordStore, {
  keySignature: observable,
  inversion: observable,
  voicing: observable,
  octaveIdx: observable,
  setInversion: action,
  chord: computed,
  chordTitle: computed,
  nrOfVoices: computed
});
