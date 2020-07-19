import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

export const KeyModulationSelector = ({
  setIsSharpening,
  setIsFlattening,
  children
}) => {
  return (
    <KeyboardEventHandler
      handleKeys={['up', 'down']}
      handleEventType="keydown"
      onKeyEvent={(key: string, e: any) => {
        setIsSharpening(key === 'up');
        setIsFlattening(key === 'down');
      }}
    >
      <KeyboardEventHandler
        handleKeys={['up', 'down']}
        handleEventType="keyup"
        onKeyEvent={(key: string, e: any) => {
          setIsFlattening(false);
          setIsSharpening(false);
        }}
      >
        {children}
      </KeyboardEventHandler>
    </KeyboardEventHandler>
  );
};
