import React from 'react';
import { observer } from 'mobx-react-lite';
import { Keyboard } from 'src/keyboard/components/Keyboard';
import { ChordTitle } from 'src/keyboard/components/ChordTitle';

type PropsT = {};

export const QuizView: React.FC<PropsT> = observer(() => {
  return (
    <div className="App">
      <ChordTitle />
      <Keyboard />
    </div>
  );
});
