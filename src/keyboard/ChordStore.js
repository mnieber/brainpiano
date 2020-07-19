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

import { invertVoicing } from 'src/utils/invertVoicing';
import { keySignatureOffsets } from 'src/keyboard/key_signature_constants';
import {
  eleventh,
  fifth,
  flat3,
  flat5,
  flat6,
  flat7,
  flat9,
  ninth,
  seventh,
  sixth,
  third
} from 'src/keyboard/note_constants';
import { voicingToChord } from 'src/utils/voicingToChord';

export const invertObj = obj =>
  pipe(always(obj), toPairs, map(reverse), fromPairs)();

const pick = (x, choice) => (x ? [choice] : []);

const toggle = (x, value) => (x === value ? undefined : value);

export class ChordStore {
  keySignature = undefined;
  inversion = 0;

  third = 0;
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
  };

  get octaveIndex() {
    if (keySignatureOffsets[this.keySignature] >= 8) return 0;
    return 1;
  }

  get octaveIndexDelta() {
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
      invertVoicing(this.voicing, mathMod(this.inversion, this.nrOfVoices)),
      this.keySignature,
      this.octaveIndex + this.octaveIndexDelta
    );
  }

  get chordTitle() {
    let base = '';
    let ext = '';

    if (this.third === -1) {
      if (this.seventh === 0) base = ' MinMaj';
      if (this.seventh === -1) base = ' Min7';
      if (this.seventh === undefined) base = ' Min';
    }

    if (this.third === 0) {
      if (this.seventh === 0) base = ' Maj7';
      if (this.seventh === -1) base = ' Dom7';
      if (this.seventh === undefined) base = ' Maj';
      if (this.eleventh === 0) base = ' Sus';
    }

    if (this.eleventh === 1) ext = '#11';
    if (this.ninth === 1) ext = '#9';
    if (this.ninth === 0) ext = '+9';
    if (this.thirteenth === 0) ext = '+13';

    return `${this.keySignature}${base}${ext}`;
  }
}

decorate(ChordStore, {
  keySignature: observable,
  inversion: observable,
  octaveIndex: computed,
  third: observable,
  fifth: observable,
  seventh: observable,
  ninth: observable,
  eleventh: observable,
  thirteenth: observable,
  setInversion: action,
  toggleNote: action,
  octaveIndexDelta: computed,
  chord: computed,
  voicing: computed,
  chordTitle: computed,
  nrOfVoices: computed
});
