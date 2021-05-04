import { makeObservable, observable, action } from 'mobx';
import { Signal } from 'micro-signals';

export class PreselectionStore {
  signal = new Signal();
  clefLetter?: string = undefined;
  isSharpening?: boolean = undefined;
  isFlattening?: boolean = undefined;

  constructor() {
    makeObservable(this, {
      clefLetter: observable,
      isSharpening: observable,
      isFlattening: observable,
      setClefLetter: action,
      setIsSharpening: action,
      setIsFlattening: action,
      reset: action,
    });
  }

  setClefLetter = (x?: string) => (this.clefLetter = x);
  setIsSharpening = (x?: boolean) => (this.isSharpening = x);
  setIsFlattening = (x?: boolean) => (this.isFlattening = x);

  reset = () => {
    if (this.clefLetter) {
      this.signal.dispatch({
        topic: 'PreselectionStore.selectClef',
        details: {
          clefLetter: this.clefLetter,
          isSharpening: this.isSharpening,
          isFlattening: this.isFlattening,
        },
      });
    }
    this.setIsFlattening(false);
    this.setIsSharpening(false);
    this.setClefLetter(undefined);
  };
}
