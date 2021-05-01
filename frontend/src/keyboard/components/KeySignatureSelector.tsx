import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useStore } from 'src/app/components/StoreProvider';
import { keyLetters } from 'src/keyboard/keyConstants';

export const KeySignatureSelector = observer(({ children }) => {
  const { preselectionStore } = useStore();

  return (
    <KeyboardEventHandler
      handleKeys={keyLetters}
      handleEventType="keydown"
      onKeyEvent={(key: string, e: any) => {
        preselectionStore.setKeyLetter(key);
      }}
    >
      <KeyboardEventHandler
        handleKeys={keyLetters}
        handleEventType="keyup"
        onKeyEvent={(key: string, e: any) => {
          preselectionStore.reset();
        }}
      >
        {children}
      </KeyboardEventHandler>
    </KeyboardEventHandler>
  );
});
