import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { useStore } from 'src/useStore';
import { keyLetters } from 'src/keyboard/constants';

export const KeySignatureSelector = ({ children }) => {
  const { keyboardStore } = useStore();
  return (
    <KeyboardEventHandler
      handleKeys={keyLetters}
      onKeyEvent={(key: string, e: any) => {
        keyboardStore.setKeyLetter(key);
        keyboardStore.setKeySharp(false);
      }}
    >
      {children}
    </KeyboardEventHandler>
  );
};
