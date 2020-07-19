import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { useStore } from 'src/useStore';
import { keyLetters } from 'src/keyboard/constants';

export const KeySignatureSelector = ({
  children,
  isSharpening,
  isFlattening
}) => {
  const { keyboardStore } = useStore();
  return (
    <KeyboardEventHandler
      handleKeys={keyLetters}
      onKeyEvent={(key: string, e: any) => {
        keyboardStore.setKeyLetter(key);
        keyboardStore.setKeySharp(isSharpening);
        keyboardStore.setKeyFlat(isFlattening);
      }}
    >
      {children}
    </KeyboardEventHandler>
  );
};
