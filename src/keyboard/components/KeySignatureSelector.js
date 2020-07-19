import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { useModulationContext } from 'src/keyboard/components/useModulationContext';
import { useStore } from 'src/useStore';
import { keyLetters } from 'src/keyboard/constants';

export const KeySignatureSelector = ({ children }) => {
  const { keyboardStore } = useStore();
  const modulation = useModulationContext();

  return (
    <KeyboardEventHandler
      handleKeys={keyLetters}
      onKeyEvent={(key: string, e: any) => {
        keyboardStore.setKeyLetter(key);
        keyboardStore.setKeySharp(modulation.isSharpening);
        keyboardStore.setKeyFlat(modulation.isFlattening);
      }}
    >
      {children}
    </KeyboardEventHandler>
  );
};
