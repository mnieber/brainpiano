import { length, range, toPairs } from 'rambda';
import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { observer } from 'mobx-react-lite';

import { keyLetters } from 'src/keyboard/key_signature_constants';
import { useStore } from 'src/useStore';
import { voicings } from 'src/keyboard/voicing_constants';

const randomElement = items => items[Math.floor(Math.random() * items.length)];

export const RandomChordSelector = observer(({ children }) => {
  const { chordStore, keySignatureStore } = useStore();

  return (
    <KeyboardEventHandler
      handleKeys={['space', 'enter']}
      onKeyEvent={(key: string, e: any) => {
        const groupName = randomElement([
          'minor',
          'major',
          'dominant',
          'other'
        ]);
        const [voicingName, voicing] = randomElement(
          toPairs(voicings[groupName])
        );
        const inversion = randomElement(range(0, length(voicing)));
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
