import { reaction } from 'mobx';
import { AppStore } from '/src/app/AppStore';

export const voicingStoreUsesSelectedClef = () => (appStore: AppStore) => {
  reaction(
    () => appStore.clefStore.clef,
    (clef) => {
      appStore.voicingStore.clef = clef;
    },
    { fireImmediately: true }
  );
};
