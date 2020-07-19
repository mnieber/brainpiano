import 'src/keyboard/components/Keyboard.css';

import React from 'react';
import { Stage } from 'react-konva';
import { observer } from 'mobx-react-lite';
import { always, map, pipe, range } from 'rambda';

import { KeyModulationSelector } from 'src/keyboard/components/KeyModulationSelector';
import { InversionSelector } from 'src/keyboard/components/InversionSelector';
import { KeySignatureSelector } from 'src/keyboard/components/KeySignatureSelector';
import { useStore } from 'src/useStore';
import { Octave } from 'src/keyboard/components/Octave';

export const Keyboard = observer(() => {
  const { chordStore, keySignatureStore } = useStore();

  const octaves = pipe(
    always(range(0, 3)),
    map(i => (
      <Octave
        key={i}
        idx={i}
        keySignature={keySignatureStore.keySignature}
        chord={chordStore.chord}
      />
    ))
  )();

  return (
    <div className="Keyboard__frame">
      <KeySignatureSelector>
        <KeyModulationSelector>
          <InversionSelector>
            <div tabIndex={0}>
              <Stage width={window.innerWidth} height={600}>
                {octaves}
              </Stage>
            </div>
          </InversionSelector>
        </KeyModulationSelector>
      </KeySignatureSelector>
    </div>
  );
});
