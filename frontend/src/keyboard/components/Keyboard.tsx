import { always, flow, map, range } from 'lodash/fp';
import { observer } from 'mobx-react-lite';
import { Stage } from 'react-konva';
import { useStore } from 'src/app/components';
import { InversionSelector } from 'src/voicings/components/InversionSelector';
import 'src/keyboard/components/Keyboard.css';
import { ClefModulationSelector } from 'src/keyboard/components/ClefModulationSelector';
import { ClefSelector } from 'src/keyboard/components/ClefSelector';
import { Octave } from 'src/keyboard/components/Octave';
import { RandomChordSelector } from 'src/voicings/components/RandomChordSelector';

export const Keyboard = observer(() => {
  const { voicingStore, clefStore } = useStore();

  const octaves = flow(
    always(range(0, 4)),
    map((i) => (
      <Octave
        key={i}
        index={i}
        clef={clefStore.clef}
        chord={voicingStore.chord}
      />
    ))
  )();

  return (
    <div className="Keyboard__frame">
      <RandomChordSelector>
        <ClefSelector>
          <ClefModulationSelector>
            <InversionSelector>
              <div tabIndex={0}>
                <Stage width={1400} height={250}>
                  {octaves}
                </Stage>
              </div>
            </InversionSelector>
          </ClefModulationSelector>
        </ClefSelector>
      </RandomChordSelector>
    </div>
  );
});
