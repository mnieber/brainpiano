import { size, range, toPairs } from 'lodash/fp';
import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useStore } from 'src/app/components/StoreProvider';
import { keyLetters } from 'src/keyboard/key_signature_constants';
import { voicings } from 'src/keyboard/voicing_constants';

const randomElement = (items) => items[Math.floor(Math.random() * size(items))];

export const RandomChordSelector = observer(({ children }) => {
  const { chordStore, keySignatureStore } = useStore();

  return (
    <KeyboardEventHandler
      handleKeys={['space', 'enter']}
      onKeyEvent={(key: string, e: any) => {
        const groupName = randomElement(['minor', 'major', 'dominant']);
        const [voicingName, voicing] = randomElement(
          toPairs(voicings[groupName])
        );
        const inversion = randomElement(range(0, size(voicing)));
        const keyLetter = randomElement(keyLetters);
        keySignatureStore.setKeyLetter(keyLetter);
        chordStore.setVoicing(voicing, voicingName);
        chordStore.setInversion(inversion);
      }}
    >
      {children}
    </KeyboardEventHandler>
  );
});
