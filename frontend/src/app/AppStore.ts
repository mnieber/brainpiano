import { reaction } from 'mobx';
import { observable, makeObservable } from 'mobx';
import { PreselectionStore } from 'src/keyboard/PreselectionStore';
import { ChordStore } from 'src/keyboard/ChordStore';
import { KeySignatureStore } from 'src/keyboard/KeySignatureStore';
import { EventT } from 'src/utils/types';

const chordStoreUsesSelectedKeySignature = () => (appStore: AppStore) => {
  reaction(
    () => appStore.keySignatureStore.keySignature,
    (keySignature) => {
      appStore.chordStore.keySignature = keySignature;
    },
    { fireImmediately: true }
  );
};

const selectKeySignatureBasedOnPreselection = () => (appStore: AppStore) => {
  appStore.preselectionStore.signal.add(((event: EventT) => {
    if (event.topic === 'PreselectionStore.selectKeySignature') {
      appStore.keySignatureStore.setKeyLetter(event.details.keyLetter);
      appStore.keySignatureStore.setKeySharp(event.details.isSharpening);
      appStore.keySignatureStore.setKeyFlat(event.details.isFlattening);
    }
  }) as any);
};

export class AppStore {
  chordStore = new ChordStore();
  keySignatureStore = new KeySignatureStore();
  preselectionStore = new PreselectionStore();

  constructor() {
    makeObservable(this, {
      chordStore: observable,
      keySignatureStore: observable,
      preselectionStore: observable,
    });
    this.applyPolicies();
  }

  applyPolicies() {
    chordStoreUsesSelectedKeySignature()(this);
    selectKeySignatureBasedOnPreselection()(this);
  }
}
