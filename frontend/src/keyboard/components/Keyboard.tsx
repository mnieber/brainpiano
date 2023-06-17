import { observer } from 'mobx-react-lite';
import { always, map, pipe, range } from 'ramda';
import { withDefaultProps } from 'react-default-props-context';
import { Stage } from 'react-konva';
import { useStore } from '/src/app/components';
import { ClefModulationSelector } from '/src/keyboard/components/ClefModulationSelector';
import { ClefSelector } from '/src/keyboard/components/ClefSelector';
import { Octave } from '/src/keyboard/components/Octave';
import { InversionSelector } from '/src/voicings/components/InversionSelector';
import { RandomChordSelector } from '/src/voicings/components/RandomChordSelector';

// Import styles
import './Keyboard.scss';

type PropsT = {
  onClick: (event: any) => void;
};

const DefaultProps = {};

export const Keyboard = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const { voicingStore, clefStore, scaleFactor } = useStore();

    const octaves = pipe(
      always(range(0, 4)),
      map((i) => (
        <Octave
          key={i}
          index={i}
          clef={clefStore.clef}
          chord={voicingStore.chord}
          scaleFactor={scaleFactor}
          colouredNote={voicingStore.colouredNote}
        />
      ))
    )();

    return (
      <div className="Keyboard__frame">
        <RandomChordSelector>
          <ClefSelector>
            <ClefModulationSelector>
              <InversionSelector>
                <div
                  className="Keyboard__overlay absolute z-50"
                  style={{
                    height: 250 * scaleFactor,
                    width: 1400 * scaleFactor,
                  }}
                  onClick={props.onClick}
                  tabIndex={0}
                />
                <div>
                  <Stage width={1400 * scaleFactor} height={250 * scaleFactor}>
                    {octaves}
                  </Stage>
                </div>
              </InversionSelector>
            </ClefModulationSelector>
          </ClefSelector>
        </RandomChordSelector>
      </div>
    );
  }, DefaultProps)
);
