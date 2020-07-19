import 'src/keyboard/components/Keyboard.css';

import React from 'react';
import { Stage } from 'react-konva';
import { observer } from 'mobx-react-lite';
import { always, map, pipe, range } from 'rambda';

import { KeySignatureSelector } from 'src/keyboard/components/KeySignatureSelector';
import { KeyModulationSelector } from 'src/keyboard/components/KeyModulationSelector';
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
      <KeySignatureSelector>
        <KeyModulationSelector>
          <div tabIndex={0}>
            <Stage width={window.innerWidth} height={window.innerHeight}>
              {octaves}
            </Stage>
          </div>
        </KeyModulationSelector>
      </KeySignatureSelector>
    </div>
  );
});
