import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { useModulationContext } from 'src/keyboard/components/useModulationContext';
import { useStore } from 'src/useStore';
import { keyLetters } from 'src/keyboard/constants';

export const KeySignatureSelector = ({
  children,
  setKeyLetterPreselection
}) => {
  const { keySignatureStore } = useStore();
  const modulation = useModulationContext();

  return (
    <KeyboardEventHandler
      handleKeys={keyLetters}
      handleEventType="keydown"
      onKeyEvent={(key: string, e: any) => {
        setKeyLetterPreselection(key);
      }}
    >
      <KeyboardEventHandler
        handleKeys={keyLetters}
        handleEventType="keyup"
        onKeyEvent={(key: string, e: any) => {
          keySignatureStore.setKeyLetter(key);
          keySignatureStore.setKeySharp(modulation.isSharpening);
          keySignatureStore.setKeyFlat(modulation.isFlattening);
        }}
      >
        {children}
      </KeyboardEventHandler>
    </KeyboardEventHandler>
  );
};
