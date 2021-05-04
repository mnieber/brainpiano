import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useStore } from 'src/app/components';
import { playChord } from 'src/voicings/utils/playChord';

export const InversionSelector = observer(({ children }) => {
  const { voicingStore } = useStore();
  return (
    <KeyboardEventHandler
      handleKeys={['ctrl+left', 'ctrl+right']}
      onKeyEvent={(key: string, e: any) => {
        if (key === 'ctrl+right') {
          voicingStore.setInversion(voicingStore.inversion + 1);
        }
        if (key === 'ctrl+left') {
          voicingStore.setInversion(voicingStore.inversion - 1);
        }
      }}
    >
      <KeyboardEventHandler
        handleKeys={['p']}
        onKeyEvent={(key: string, e: any) => {
          playChord(voicingStore.chord);
        }}
      >
        {children}
      </KeyboardEventHandler>
    </KeyboardEventHandler>
  );
});
