import React from 'react';
import { observer } from 'mobx-react-lite';
import { Keyboard } from 'src/keyboard/components/Keyboard';
import { QuizFrame } from 'src/quiz/components';

type PropsT = {};

export const QuizView: React.FC<PropsT> = observer(() => {
  return (
    <QuizFrame>
      <Keyboard />
    </QuizFrame>
  );
});
