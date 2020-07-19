import { decorate, observable, action } from 'mobx';

export class PreselectionStore {
  keyLetter = undefined;
  noteDigit = undefined;
  isSharpening = undefined;
  isFlattening = undefined;

  constructor(globalStore) {
    this.globalStore = globalStore;
  }

  setKeyLetter = x => (this.keyLetter = x);
  setNoteDigit = x => (this.noteDigit = x);
  setIsSharpening = x => (this.isSharpening = x);
  setIsFlattening = x => (this.isFlattening = x);

  reset = () => {
    if (this.keyLetter) {
      this.globalStore.sendEvent({
        type: 'PreselectionStore.selectKeySignature',
        keyLetter: this.keyLetter,
        isSharpening: this.isSharpening,
        isFlattening: this.isFlattening
      });
    }
    if (this.noteDigit) {
      this.globalStore.sendEvent({
        type: 'PreselectionStore.selectNoteDigit',
        noteDigit: this.noteDigit,
        isSharpening: this.isSharpening,
        isFlattening: this.isFlattening
      });
    }
    this.setIsFlattening(false);
    this.setIsSharpening(false);
    this.setKeyLetter(undefined);
    this.setNoteDigit(undefined);
  };
}

decorate(PreselectionStore, {
  keyLetter: observable,
  noteDigit: observable,
  isSharpening: observable,
  isFlattening: observable,
  setKeyLetter: action,
  setIsSharpening: action,
  setIsFlattening: action,
  reset: action
});
