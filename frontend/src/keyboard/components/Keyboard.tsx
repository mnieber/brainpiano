import { always, flow, map, range } from 'lodash/fp';
import { observer } from 'mobx-react-lite';
import { Stage } from 'react-konva';
import { useStore } from 'src/app/components/StoreProvider';
import { InversionSelector } from 'src/voicings/components/InversionSelector';
import 'src/keyboard/components/Keyboard.css';
import { KeyModulationSelector } from 'src/keyboard/components/KeyModulationSelector';
import { KeySignatureSelector } from 'src/keyboard/components/KeySignatureSelector';
import { Octave } from 'src/keyboard/components/Octave';
import { RandomChordSelector } from 'src/voicings/components/RandomChordSelector';

export const Keyboard = observer(() => {
  const { voicingStore, keySignatureStore } = useStore();

  const octaves = flow(
    always(range(0, 4)),
    map((i) => (
      <Octave
        key={i}
        index={i}
        keySignature={keySignatureStore.keySignature}
        chord={voicingStore.chord}
      />
    ))
  )();

  return (
    <div className="Keyboard__frame">
      <RandomChordSelector>
        <KeySignatureSelector>
          <KeyModulationSelector>
            <InversionSelector>
              <div tabIndex={0}>
                <Stage width={1600} height={600}>
                  {octaves}
                </Stage>
              </div>
            </InversionSelector>
          </KeyModulationSelector>
        </KeySignatureSelector>
      </RandomChordSelector>
    </div>
  );
});
