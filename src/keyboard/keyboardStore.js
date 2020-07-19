import { action, decorate, observable } from 'mobx';

import { invert, keyC, min7_9, voicingToChord } from 'src/keyboard/constants';

export class KeyboardStore {
  keySignature = keyC;
  inversion = 0;
  voicing = min7_9;
  octaveIdx = 0;

  setKeySignature = keySignature => {
    this.keySignature = keySignature;
  };

  get chord() {
    return voicingToChord(
      invert(this.voicing, this.inversion),
      this.keySignature,
      this.octaveIdx
    );
  }
}

decorate(KeyboardStore, {
  keySignature: observable,
  inversion: observable,
  voicing: observable,
  octaveIdx: observable,
  setKeySignature: action
});
