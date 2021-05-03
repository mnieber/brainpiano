import { EventT } from 'src/utils/types';
import { AppStore } from 'src/app/AppStore';

export const selectClefBasedOnPreselection = () => (appStore: AppStore) => {
  appStore.preselectionStore.signal.add(((event: EventT) => {
    if (event.topic === 'PreselectionStore.selectClef') {
      appStore.clefStore.setClefLetter(event.details.keyLetter);
      appStore.clefStore.setClefSharp(event.details.isSharpening);
      appStore.clefStore.setClefFlat(event.details.isFlattening);
    }
  }) as any);
};
