import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { useStore } from 'src/useStore';

export const KeyModulationSelector = ({ children }) => {
  const { keyboardStore } = useStore();
  return (
    <KeyboardEventHandler
      handleKeys={['v', 's']}
      onKeyEvent={(key: string, e: any) => {
        if (key === 'v') keyboardStore.setKeyFlat(!keyboardStore.keyFlat);
        if (key === 's') keyboardStore.setKeySharp(!keyboardStore.keySharp);
      }}
    >
      {children}
    </KeyboardEventHandler>
  );
};
