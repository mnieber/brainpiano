import React from 'react';
import { StoreContext } from '/src/app/components/StoreProvider';

export const useStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
