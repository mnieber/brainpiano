import { makeObservable, observable, action } from 'mobx';
import { Signal } from 'micro-signals';

export class PreselectionStore {
  signal = new Signal();
  keyLetter = undefined;
  noteDigit = undefined;
  isSharpening = undefined;
  isFlattening = undefined;

  constructor() {
    makeObservable(this, {
      keyLetter: observable,
      noteDigit: observable,
      isSharpening: observable,
      isFlattening: observable,
      setKeyLetter: action,
      setIsSharpening: action,
      setIsFlattening: action,
      reset: action,
    });
  }

  setKeyLetter = (x) => (this.keyLetter = x);
  setNoteDigit = (x) => (this.noteDigit = x);
  setIsSharpening = (x) => (this.isSharpening = x);
  setIsFlattening = (x) => (this.isFlattening = x);

  reset = () => {
    if (this.keyLetter) {
      this.signal.dispatch({
        topic: 'PreselectionStore.selectKeySignature',
        details: {
          keyLetter: this.keyLetter,
          isSharpening: this.isSharpening,
          isFlattening: this.isFlattening,
        },
      });
    }
    if (this.noteDigit) {
      this.signal.dispatch({
        topic: 'PreselectionStore.selectNoteDigit',
        details: {
          noteDigit: this.noteDigit,
          isSharpening: this.isSharpening,
          isFlattening: this.isFlattening,
        },
      });
    }
    this.setIsFlattening(false);
    this.setIsSharpening(false);
    this.setKeyLetter(undefined);
    this.setNoteDigit(undefined);
  };
}
