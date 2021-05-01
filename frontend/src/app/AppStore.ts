import { reaction } from 'mobx';
import { observable, makeObservable } from 'mobx';
import { PreselectionStore } from 'src/keyboard/PreselectionStore';
import { VoicingStore } from 'src/voicings/VoicingStore';
import { KeySignatureStore } from 'src/keyboard/KeySignatureStore';
import { EventT } from 'src/utils/types';

const voicingStoreUsesSelectedKeySignature = () => (appStore: AppStore) => {
  reaction(
    () => appStore.keySignatureStore.keySignature,
    (keySignature) => {
      appStore.voicingStore.keySignature = keySignature;
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
  voicingStore = new VoicingStore();
  keySignatureStore = new KeySignatureStore();
  preselectionStore = new PreselectionStore();

  constructor() {
    makeObservable(this, {
      voicingStore: observable,
      keySignatureStore: observable,
      preselectionStore: observable,
    });
    this.applyPolicies();
  }

  applyPolicies() {
    voicingStoreUsesSelectedKeySignature()(this);
    selectKeySignatureBasedOnPreselection()(this);
  }
}
