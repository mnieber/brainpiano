import { action, computed, decorate, observable } from 'mobx';

import { keyC } from 'src/keyboard/constants';

export class KeySignatureStore {
  keyLetter = keyC;
  keySharp = false;
  keyFlat = false;

  setKeyLetter = keyLetter => {
    this.keyLetter = keyLetter;
  };

  setKeySharp = x => {
    this.keySharp = x;
    if (x) this.keyFlat = false;
  };

  setKeyFlat = x => {
    this.keyFlat = x;
    if (x) this.keySharp = false;
  };

  get keySignature() {
    return this.keyLetter + (this.keySharp ? '#' : this.keyFlat ? 'b' : '');
  }
}

decorate(KeySignatureStore, {
  keyLetter: observable,
  keySharp: observable,
  keyFlat: observable,
  setKeyLetter: action,
  setKeySharp: action,
  setKeyFlat: action,
  keySignature: computed
});
