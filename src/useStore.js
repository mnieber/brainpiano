import React from 'react';
import { reaction } from 'mobx';

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

class GlobalStore {
  chordStore = new ChordStore();
  keySignatureStore = new KeySignatureStore();

  constructor() {
    this.installPolicies();
  }

  installPolicies() {
    chordStoreUsesSelectedKeySignature()(this);
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
