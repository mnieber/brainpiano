import { decorate, observable, action } from 'mobx';

export class PreselectionStore {
  keyLetter = undefined;
  isSharpening = undefined;
  isFlattening = undefined;

  setKeyLetter = x => (this.keyLetter = x);
  setIsSharpening = x => (this.isSharpening = x);
  setIsFlattening = x => (this.isFlattening = x);
}

decorate(PreselectionStore, {
  keyLetter: observable,
  isSharpening: observable,
  isFlattening: observable,
  setKeyLetter: action,
  setIsSharpening: action,
  setIsFlattening: action
});
