import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useStore } from 'src/app/components/StoreProvider';

export const InversionSelector = observer(({ children }) => {
  const { chordStore } = useStore();
  return (
    <KeyboardEventHandler
      handleKeys={['ctrl+left', 'ctrl+right']}
      onKeyEvent={(key: string, e: any) => {
        if (key === 'ctrl+right') {
          chordStore.setInversion(chordStore.inversion + 1);
        }
        if (key === 'ctrl+left') {
          chordStore.setInversion(chordStore.inversion - 1);
        }
      }}
    >
      {children}
    </KeyboardEventHandler>
  );
});
