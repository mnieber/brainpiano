import 'src/keyboard/components/Keyboard.css';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'src/useStore';

export const ChordTitle = observer(() => {
  const { chordStore } = useStore();

  return <h1>{chordStore.chordTitle}</h1>;
});