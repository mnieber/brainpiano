import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { useStore } from 'src/useStore';
import { keyLetters } from 'src/keyboard/constants';

export const KeySignatureSelector = ({
  children,
  setKeyLetterPreselection
}) => {
  const { keySignatureStore, preselectionStore } = useStore();

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
          keySignatureStore.setKeySharp(preselectionStore.isSharpening);
          keySignatureStore.setKeyFlat(preselectionStore.isFlattening);
        }}
      >
        {children}
      </KeyboardEventHandler>
    </KeyboardEventHandler>
  );
};
