import { action, computed, makeObservable, observable } from 'mobx';

import { clefC } from 'src/keyboard/keyConstants';
import { randomElement } from 'src/utils/random';
import { ClefT } from 'src/keyboard/types';

export class ClefStore {
  clefLetter = clefC;
  clefSharp = false;
  clefFlat = false;

  constructor() {
    makeObservable(this, {
      clefLetter: observable,
      clefSharp: observable,
      clefFlat: observable,
      setClefLetter: action,
      setClefSharp: action,
      setClefFlat: action,
      clef: computed,
    });
  }

  setClefLetter = (clefLetter: string) => {
    this.clefLetter = clefLetter;
  };

  setClefSharp = (x: boolean) => {
    this.clefSharp = x;
    if (x) this.clefFlat = false;
  };

  setClefFlat = (x: boolean) => {
    this.clefFlat = x;
    if (x) this.clefSharp = false;
  };

  get clef() {
    return this.clefLetter + (this.clefSharp ? '#' : this.clefFlat ? 'b' : '');
  }

  setRandomClef(clefs: ClefT[]) {
    const clef = randomElement(clefs);
    const clefLetter = clef[0];
    this.setClefLetter(clefLetter);
    const modulate = clef[1];
    this.setClefFlat(modulate == 'b');
    this.setClefSharp(modulate == '#');
  }
}
