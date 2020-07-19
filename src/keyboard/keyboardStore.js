import {
  always,
  fromPairs,
  map,
  mathMod,
  pipe,
  reverse,
  toPairs
} from 'rambda';
import { action, computed, decorate, observable } from 'mobx';

import {
  invert,
  keyC,
  keySignatureOffsets,
  min7_9,
  voicingToChord
} from 'src/keyboard/constants';

const invertObj = obj => pipe(always(obj), toPairs, map(reverse), fromPairs)();

const offsetToKeySignature = invertObj(keySignatureOffsets);

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

  setKeyModulation = x => {
    this.keySharp = x === 1;
    this.keyFlat = x === -1;
  };

  get chord() {
    return voicingToChord(
      invert(this.voicing, this.inversion),
      this.keySignature,
      this.octaveIdx
    );
  }

  get keySignature() {
    const keyOffset =
      keySignatureOffsets[this.keyLetter] +
      (this.keySharp ? 1 : this.keyFlat ? -1 : 0);
    return offsetToKeySignature[mathMod(keyOffset, 12)];
  }

  get chordTitle() {
    return `${this.keySignature.toUpperCase()} Min7 9`;
  }
}

decorate(KeyboardStore, {
  inversion: observable,
  voicing: observable,
  octaveIdx: observable,
  keyLetter: observable,
  setKeyLetter: action,
  setKeyModulation: action,
  chord: computed,
  chordTitle: computed,
  keySignature: computed
});
