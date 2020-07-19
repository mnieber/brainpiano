import React from 'react';
import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { useStore } from 'src/useStore';

export const NoteSelector = observer(({ children }) => {
  const { preselectionStore } = useStore();

  return (
    <KeyboardEventHandler
      handleKeys={['2', '3', '4', '5', '6', '7']}
      handleEventType="keydown"
      onKeyEvent={(key: string, e: any) => {
        preselectionStore.setNoteDigit(key);
      }}
    >
      <KeyboardEventHandler
        handleKeys={['2', '3', '4', '5', '6', '7']}
        handleEventType="keyup"
        onKeyEvent={(key: string, e: any) => {
          preselectionStore.reset();
        }}
      >
        {children}
      </KeyboardEventHandler>
    </KeyboardEventHandler>
  );
});
