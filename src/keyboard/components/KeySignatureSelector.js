import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { observer } from 'mobx-react-lite';

import { keyLetters } from 'src/keyboard/key_signature_constants';
import { useStore } from 'src/useStore';

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
