import { action, computed, makeObservable, observable } from 'mobx';

import { keyC } from 'src/keyboard/constants';

export class KeySignatureStore {
  keyLetter = keyC;
  keySharp = false;
  keyFlat = false;

  constructor() {
    makeObservable(this, {
      keyLetter: observable,
      keySharp: observable,
      keyFlat: observable,
      setKeyLetter: action,
      setKeySharp: action,
      setKeyFlat: action,
      keySignature: computed,
    });
  }

  setKeyLetter = (keyLetter) => {
    this.keyLetter = keyLetter;
  };

  setKeySharp = (x) => {
    this.keySharp = x;
    if (x) this.keyFlat = false;
  };

  setKeyFlat = (x) => {
    this.keyFlat = x;
    if (x) this.keySharp = false;
  };

  get keySignature() {
    return this.keyLetter + (this.keySharp ? '#' : this.keyFlat ? 'b' : '');
  }
}