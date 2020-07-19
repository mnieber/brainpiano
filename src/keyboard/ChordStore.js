import { action, computed, decorate, observable } from 'mobx';
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

import {
  eleventh,
  fifth,
  flat3,
  flat5,
  flat6,
  flat7,
  flat9,
  invert,
  ninth,
  seventh,
  sixth,
  third,
  voicingToChord
} from 'src/keyboard/constants';

export const invertObj = obj =>
  pipe(always(obj), toPairs, map(reverse), fromPairs)();

const pick = (x, choice) => (x ? [choice] : []);

const toggle = (x, value) => (x === value) ? undefined : value;

export class ChordStore {
  keySignature = undefined;
  inversion = 0;
  octaveIdx = 1;

  third = -1;
  fifth = 0;
  seventh = -1;
  ninth = 0;
  eleventh = undefined;
  thirteenth = undefined;

  setInversion = x => {
    const maxInversion = this.nrOfVoices;
    const minInversion = -1 * this.nrOfVoices;
    this.inversion =
      x <= minInversion ? minInversion : x >= maxInversion ? maxInversion : x;
  };

  toggleNote = (noteDigit, isSharp, isFlat) => {
    const isNeutral = !isSharp && !isFlat;
    (console: any).log("ND", noteDigit)

    if (isNeutral) {
      if (noteDigit === '2') this.ninth = toggle(this.ninth, 0);
      if (noteDigit === '3') this.third = toggle(this.third, 0);
      if (noteDigit === '4') this.eleventh = toggle(this.eleventh, 0);
      if (noteDigit === '5') this.fifth = toggle(this.fifth, 0);
      if (noteDigit === '6') this.thirteenth = toggle(this.thirteenth, 0);
      if (noteDigit === '7') this.seventh = toggle(this.seventh, 0);
    }

    if (isSharp) {
      if (noteDigit === '2') this.ninth = undefined;
      if (noteDigit === '2') this.third = toggle(this.third, -1);
      if (noteDigit === '4') this.fifth = undefined;
      if (noteDigit === '4') this.eleventh = toggle(this.eleventh, 1);
      if (noteDigit === '5') this.fifth = undefined;
      if (noteDigit === '5') this.thirteenth = toggle(this.thirteenth, -1);
      if (noteDigit === '6') this.thirteenth = undefined;
      if (noteDigit === '6') this.seventh = toggle(this.seventh, -1);
    }

    if (isFlat) {
      if (noteDigit === '2') this.ninth = toggle(this.ninth, -1);
      if (noteDigit === '3') this.third = toggle(this.third, -1);
      if (noteDigit === '5') this.fifth = undefined;
      if (noteDigit === '5') this.eleventh = toggle(this.eleventh, 1);
      if (noteDigit === '6') this.thirteenth = toggle(this.thirteenth, -1);
      if (noteDigit === '6') this.fifth = undefined;
      if (noteDigit === '7') this.seventh = toggle(this.seventh, -1);
    }
  }

  get octaveIdxDelta() {
    const result =
      this.inversion >= this.nrOfVoices ? 1 : this.inversion < 0 ? -1 : 0;
    return result;
  }

  get voicing() {
    return [
      ...pick(this.ninth === -1, flat9),
      ...pick(this.ninth === 0, ninth),
      ...pick(this.ninth === 1 || this.third === -1, flat3),
      ...pick(this.third === 0, third),
      ...pick(this.eleventh === 0, eleventh),
      ...pick(this.eleventh === 1 || this.fifth === -1, flat5),
      ...pick(this.fifth === 0, fifth),
      ...pick(this.fifth === 1 || this.thirteenth === -1, flat6),
      ...pick(this.thirteenth === 0, sixth),
      ...pick(this.seventh === -1, flat7),
      ...pick(this.seventh === 0, seventh)
    ];
  }

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
  octaveIdx: observable,
  third: observable,
  fifth: observable,
  seventh: observable,
  ninth: observable,
  eleventh: observable,
  thirteenth: observable,
  setInversion: action,
  toggleNote: action,
  octaveIdxDelta: computed,
  chord: computed,
  voicing: computed,
  chordTitle: computed,
  nrOfVoices: computed
});
