import 'src/keyboard/components/Keyboard.css';

import React from 'react';
import { Stage } from 'react-konva';
import { observer } from 'mobx-react-lite';
import { always, map, pipe, range } from 'rambda';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { keyLetters } from 'src/keyboard/constants';
import { useStore } from 'src/useStore';
import { Octave } from 'src/keyboard/components/Octave';

export const Keyboard = observer(() => {
  const { keyboardStore } = useStore();

  const octaves = pipe(
    always(range(0, 3)),
    map(i => (
      <Octave
        key={i}
        idx={i}
        keySignature={keyboardStore.keySignature}
        chord={keyboardStore.chord}
      />
    ))
  )();
  return (
    <div className="Keyboard__frame">
      <KeyboardEventHandler
        handleKeys={keyLetters}
        onKeyEvent={(key: string, e: any) => {
          keyboardStore.setKeySignature(key);
        }}
      >
        <div tabIndex={0}>
          <Stage width={window.innerWidth} height={window.innerHeight}>
            {octaves}
          </Stage>
        </div>
      </KeyboardEventHandler>
    </div>
  );
});
