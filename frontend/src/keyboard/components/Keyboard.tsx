import { always, flow, map, range } from 'lodash/fp';
import { observer } from 'mobx-react-lite';
import { FC, useDefaultProps } from 'react-default-props-context';
import { Stage } from 'react-konva';
import { useStore } from 'src/app/components';
import { ClefModulationSelector } from 'src/keyboard/components/ClefModulationSelector';
import { ClefSelector } from 'src/keyboard/components/ClefSelector';
import 'src/keyboard/components/Keyboard.css';
import { Octave } from 'src/keyboard/components/Octave';
import { InversionSelector } from 'src/voicings/components/InversionSelector';
import { RandomChordSelector } from 'src/voicings/components/RandomChordSelector';

type PropsT = {
  onClick: (event: any) => void;
};

type DefaultPropsT = {};

export const Keyboard: FC<PropsT, DefaultPropsT> = observer((p: PropsT) => {
  const props = useDefaultProps<PropsT, DefaultPropsT>(p);

  const { voicingStore, clefStore, scaleFactor } = useStore();

  const octaves = flow(
    always(range(0, 4)),
    map((i) => (
      <Octave
        key={i}
        index={i}
        clef={clefStore.clef}
        chord={voicingStore.chord}
        scaleFactor={scaleFactor}
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
                className="absolute w-full z-50"
                style={{ height: 250 * scaleFactor }}
                onClick={props.onClick}
              />
              <div tabIndex={0}>
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
});
