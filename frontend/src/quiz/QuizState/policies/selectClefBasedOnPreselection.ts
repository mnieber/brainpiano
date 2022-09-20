import { ClefStore } from 'src/keyboard/ClefStore';
import { PreselectionStore } from 'src/keyboard/PreselectionStore';
import { EventT } from 'src/utils/types';

export const selectClefBasedOnPreselection = (
  clefStore: ClefStore,
  preselectionStore: PreselectionStore
) => {
  const handler = (event: EventT) => {
    if (event.topic === 'PreselectionStore.selectClef') {
      clefStore.setClef(
        event.details.clefLetter +
          (event.details.isSharpening
            ? '#'
            : event.details.isFlattening
            ? 'b'
            : '')
      );
    }
  };

  preselectionStore.signal.add(handler as any);
  return () => preselectionStore.signal.remove(handler);
};
