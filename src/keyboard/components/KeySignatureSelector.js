import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { observer } from 'mobx-react-lite';

import { useStore } from 'src/useStore';
import { keyLetters } from 'src/keyboard/constants';

export const KeySignatureSelector = observer(({ children }) => {
  const { keySignatureStore, preselectionStore } = useStore();

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
          if (preselectionStore.keyLetter) {
            keySignatureStore.setKeyLetter(key);
            keySignatureStore.setKeySharp(preselectionStore.isSharpening);
            keySignatureStore.setKeyFlat(preselectionStore.isFlattening);
          }
        }}
      >
        {children}
      </KeyboardEventHandler>
    </KeyboardEventHandler>
  );
});