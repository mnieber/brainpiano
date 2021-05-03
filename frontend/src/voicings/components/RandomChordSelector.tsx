import { range, size, values } from 'lodash/fp';
import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useStore } from 'src/app/components';
import { voicings } from 'src/voicings/voicingValues';
import { clefs } from 'src/keyboard/keyConstants';
import { getInversionRange } from 'src/voicings/utils/invertChord';
import { voicingToChord } from 'src/voicings/utils/voicingToChord';

const randomElement = (items: Array<any>) =>
  items[Math.floor(Math.random() * size(items))];

export const RandomChordSelector = observer(({ children }) => {
  const { voicingStore, clefStore } = useStore();

  return (
    <KeyboardEventHandler
      handleKeys={['space', 'enter']}
      onKeyEvent={(key: string, e: any) => {
        const clef = randomElement(clefs);
        const clefLetter = clef[0];

        const groupName = randomElement([
          'fourths',
          'minor',
          'major',
          'dominant',
        ]);
        const voicing = randomElement(values(voicings[groupName]));
        const [minInversion, maxInversion] = getInversionRange(
          voicingToChord(voicing, clef, 1)
        );
        const inversion = randomElement(
          range(minInversion, maxInversion - minInversion)
        );
        clefStore.setClefLetter(clefLetter);
        const modulate = clef[1];
        clefStore.setClefFlat(modulate == 'b');
        clefStore.setClefSharp(modulate == '#');
        voicingStore.setVoicing(voicing);
        voicingStore.setInversion(inversion);
      }}
    >
      {children}
    </KeyboardEventHandler>
  );
});
