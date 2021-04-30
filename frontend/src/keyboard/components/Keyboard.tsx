import { always, flow, map, range } from 'lodash/fp';
import { observer } from 'mobx-react-lite';
import { Stage } from 'react-konva';
import { useStore } from 'src/app/components/StoreProvider';
import { InversionSelector } from 'src/keyboard/components/InversionSelector';
import 'src/keyboard/components/Keyboard.css';
import { KeyModulationSelector } from 'src/keyboard/components/KeyModulationSelector';
import { KeySignatureSelector } from 'src/keyboard/components/KeySignatureSelector';
import { NoteSelector } from 'src/keyboard/components/NoteSelector';
import { Octave } from 'src/keyboard/components/Octave';
import { RandomChordSelector } from 'src/keyboard/components/RandomChordSelector';

export const Keyboard = observer(() => {
  const { chordStore, keySignatureStore } = useStore();

  const octaves = flow(
    always(range(0, 4)),
    map((i) => (
      <Octave
        key={i}
        index={i}
        keySignature={keySignatureStore.keySignature}
        chord={chordStore.chord}
      />
    ))
  )();

  return (
    <div className="Keyboard__frame">
      <RandomChordSelector>
        <KeySignatureSelector>
          <NoteSelector>
            <KeyModulationSelector>
              <InversionSelector>
                <div tabIndex={0}>
                  <Stage width={1600} height={600}>
                    {octaves}
                  </Stage>
                </div>
              </InversionSelector>
            </KeyModulationSelector>
          </NoteSelector>
        </KeySignatureSelector>
      </RandomChordSelector>
    </div>
  );
});
