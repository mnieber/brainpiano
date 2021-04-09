import { reaction } from 'mobx';
import { observable, makeObservable } from 'mobx';
import { PreselectionStore } from 'src/keyboard/PreselectionStore';
import { ChordStore } from 'src/keyboard/ChordStore';
import { KeySignatureStore } from 'src/keyboard/KeySignatureStore';
import { VoicingsStore } from 'src/voicings/VoicingsStore';

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
  appStore.preselectionStore.signal.add((event) => {
    if (event.topic === 'PreselectionStore.selectKeySignature') {
      appStore.keySignatureStore.setKeyLetter(event.keyLetter);
      appStore.keySignatureStore.setKeySharp(event.isSharpening);
      appStore.keySignatureStore.setKeyFlat(event.isFlattening);
    }
  });
};

const toggleNoteBasedOnPreselection = () => (appStore: AppStore) => {
  appStore.preselectionStore.signal.add((event) => {
    if (event.topic === 'PreselectionStore.selectNoteDigit') {
      appStore.chordStore.toggleNote(
        event.noteDigit,
        event.isSharpening,
        event.isFlattening
      );
    }
  });
};

export class AppStore {
  voicingsStore = new VoicingsStore();
  chordStore = new ChordStore();
  keySignatureStore = new KeySignatureStore();
  preselectionStore = new PreselectionStore();

  constructor() {
    makeObservable(this, {
      voicingsStore: observable,
      chordStore: observable,
      keySignatureStore: observable,
      preselectionStore: observable,
    });
    this.applyPolicies();
  }

  applyPolicies() {
    chordStoreUsesSelectedKeySignature()(this);
    selectKeySignatureBasedOnPreselection()(this);
    toggleNoteBasedOnPreselection()(this);
  }
}
