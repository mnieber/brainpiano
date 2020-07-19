import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { useModulationContext } from 'src/keyboard/components/useModulationContext';

export const KeyModulationSelector = ({ children }) => {
  const modulation = useModulationContext();

  return (
    <KeyboardEventHandler
      handleKeys={['up', 'down']}
      handleEventType="keydown"
      onKeyEvent={(key: string, e: any) => {
        modulation.setIsSharpening(key === 'up');
        modulation.setIsFlattening(key === 'down');
      }}
    >
      <KeyboardEventHandler
        handleKeys={['up', 'down']}
        handleEventType="keyup"
        onKeyEvent={(key: string, e: any) => {
          modulation.setIsFlattening(false);
          modulation.setIsSharpening(false);
        }}
      >
        {children}
      </KeyboardEventHandler>
    </KeyboardEventHandler>
  );
};
