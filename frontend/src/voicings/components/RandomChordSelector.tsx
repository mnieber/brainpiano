import { range, size, values } from 'lodash/fp';
import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useStore } from 'src/app/components';
import { getInversionRange } from 'src/voicings/utils/invertChord';
import { voicingToChord } from 'src/voicings/utils/voicingToChord';
import { useDefaultProps, FC } from 'react-default-props-context';
import { Selection } from 'skandha-facets/Selection';

const randomElement = (items: Array<any>) =>
  items[Math.floor(Math.random() * size(items))];

type PropsT = React.PropsWithChildren<{}>;

type DefaultPropsT = {
  groupsSelection: Selection;
  clefsSelection: Selection;
};

export const RandomChordSelector: FC<PropsT, DefaultPropsT> = observer(
  (p: PropsT) => {
    const props = useDefaultProps<PropsT, DefaultPropsT>(p);
    const { voicingStore, clefStore } = useStore();

    return (
      <KeyboardEventHandler
        handleKeys={['space', 'enter']}
        onKeyEvent={(key: string, e: any) => {
          const clef = randomElement(props.clefsSelection.ids);
          const clefLetter = clef[0];

          const group = randomElement(props.groupsSelection.items ?? []);
          const voicing = randomElement(group.voicings);
          const [minInversion, maxInversion] = getInversionRange(
            voicingToChord(voicing, clef, 1)
          );
          const inversion = randomElement(
            range(
              Math.max(0, minInversion),
              Math.min(voicing.chord.length, maxInversion)
            )
          );
          clefStore.setClefLetter(clefLetter);
          const modulate = clef[1];
          clefStore.setClefFlat(modulate == 'b');
          clefStore.setClefSharp(modulate == '#');
          voicingStore.setVoicing(voicing);
          voicingStore.setInversion(inversion);
        }}
      >
        {props.children}
      </KeyboardEventHandler>
    );
  }
);
