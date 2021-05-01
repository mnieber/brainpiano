import React from 'react';
import { observer } from 'mobx-react-lite';
import { Keyboard } from 'src/keyboard/components/Keyboard';
import { VoicingTitle } from 'src/voicings/components/VoicingTitle';

type PropsT = {};

export const QuizView: React.FC<PropsT> = observer(() => {
  return (
    <div className="App">
      <VoicingTitle />
      <Keyboard />
    </div>
  );
});
