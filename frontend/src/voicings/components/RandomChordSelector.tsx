import { size, range, values } from 'lodash/fp';
import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useStore } from 'src/app/components';
import { voicings } from 'src/voicings/voicingValues';

const clefs = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

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

        const groupName = randomElement(['minor', 'major', 'dominant']);
        const voicing = randomElement(values(voicings[groupName]));
        const inversion = randomElement(range(0, size(voicing.chord)));
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
