import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { useStore } from 'src/useStore';

export const InversionSelector = ({ children }) => {
  const { keyboardStore } = useStore();
  return (
    <KeyboardEventHandler
      handleKeys={['ctrl+left', 'ctrl+right']}
      onKeyEvent={(key: string, e: any) => {
        if (key === 'ctrl+right') {
          keyboardStore.setInversion(keyboardStore.inversion + 1);
        }
        if (key === 'ctrl+left') {
          keyboardStore.setInversion(keyboardStore.inversion - 1);
        }
      }}
    >
      {children}
    </KeyboardEventHandler>
  );
};
