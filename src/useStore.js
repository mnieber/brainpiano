import React from 'react';
import { reaction } from 'mobx';
import { Signal } from 'micro-signals';

import { PreselectionStore } from 'src/keyboard/PreselectionStore';
import { ChordStore } from 'src/keyboard/ChordStore';
import { KeySignatureStore } from 'src/keyboard/KeySignatureStore';

const storeContext = React.createContext(null);

const chordStoreUsesSelectedKeySignature = () => globalStore => {
  reaction(
    () => globalStore.keySignatureStore.keySignature,
    keySignature => {
      globalStore.chordStore.keySignature = keySignature;
    },
    { fireImmediately: true }
  );
};

const selectKeySignatureBasedOnPreselection = () => globalStore => {
  globalStore.listen('PreselectionStore.selectKeySignature', event => {
    globalStore.keySignatureStore.setKeyLetter(event.keyLetter);
    globalStore.keySignatureStore.setKeySharp(event.isSharpening);
    globalStore.keySignatureStore.setKeyFlat(event.isFlattening);
  });
};

const toggleNoteBasedOnPreselection = () => globalStore => {
  globalStore.listen('PreselectionStore.selectNoteDigit', event => {
    globalStore.chordStore.toggleNote(
      event.noteDigit,
      event.isSharpening,
      event.isFlattening
    );
  });
};

class GlobalStore {
  signal = new Signal();
  chordStore = undefined;
  keySignatureStore = undefined;
  preselectionStore = undefined;

  constructor() {
    this.createStores();
    this.installPolicies();
  }

  createStores() {
    this.chordStore = new ChordStore();
    this.keySignatureStore = new KeySignatureStore();
    this.preselectionStore = new PreselectionStore(this);
  }

  installPolicies() {
    chordStoreUsesSelectedKeySignature()(this);
    selectKeySignatureBasedOnPreselection()(this);
    toggleNoteBasedOnPreselection()(this);
  }

  sendEvent(event: any) {
    this.signal.dispatch(event);
  }

  listen(type: string = '*', callback: (event: any) => any) {
    const cb = event => {
      if (event.type === type || type === '*') {
        callback(event);
      }
    };
    this.signal.add(cb);
  }
}

const globalStore = new GlobalStore();

export const StoreProvider = ({ children }) => {
  return (
    <storeContext.Provider value={globalStore}>
      {children}
    </storeContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
