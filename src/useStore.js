import React from 'react';

import { KeyboardStore } from 'src/keyboard/keyboardStore';

const storeContext = React.createContext(null);

class GlobalStore {
  keyboardStore = new KeyboardStore();

  constructor() {
    this.installPolicies();
  }

  installPolicies() {}
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
