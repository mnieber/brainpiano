import { decorate, observable, action } from 'mobx';

export class PreselectionStore {
  keyLetter = undefined;
  isSharpening = undefined;
  isFlattening = undefined;

  constructor(globalStore) {
    this.globalStore = globalStore;
  }

  setKeyLetter = x => (this.keyLetter = x);
  setIsSharpening = x => (this.isSharpening = x);
  setIsFlattening = x => (this.isFlattening = x);

  reset = () => {
    if (this.keyLetter && (this.isSharpening || this.isFlattening)) {
      this.globalStore.sendEvent({
        type: 'PreselectionStore.selectKeySignature',
        keyLetter: this.keyLetter,
        isSharpening: this.isSharpening,
        isFlattening: this.isFlattening
      });
    }
    this.setIsFlattening(false);
    this.setIsSharpening(false);
    this.setKeyLetter(undefined);
  };
}

decorate(PreselectionStore, {
  keyLetter: observable,
  isSharpening: observable,
  isFlattening: observable,
  setKeyLetter: action,
  setIsSharpening: action,
  setIsFlattening: action,
  reset: action
});
