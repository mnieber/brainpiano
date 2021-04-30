import { size, range, values } from 'lodash/fp';
import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useStore } from 'src/app/components/StoreProvider';
import { keyLetters } from 'src/keyboard/key_signature_constants';
import { voicings } from 'src/keyboard/voicing_constants';

const randomElement = (items: Array<any>) =>
  items[Math.floor(Math.random() * size(items))];

export const RandomChordSelector = observer(({ children }) => {
  const { chordStore, keySignatureStore } = useStore();

  return (
    <KeyboardEventHandler
      handleKeys={['space', 'enter']}
      onKeyEvent={(key: string, e: any) => {
        const groupName = randomElement(['minor', 'major', 'dominant']);
        const voicing = randomElement(values(voicings[groupName]));
        const inversion = randomElement(range(0, size(voicing.noteNames)));
        const keyLetter = randomElement(keyLetters);
        keySignatureStore.setKeyLetter(keyLetter);
        chordStore.setVoicing(voicing);
        chordStore.setInversion(inversion);
      }}
    >
      {children}
    </KeyboardEventHandler>
  );
});
