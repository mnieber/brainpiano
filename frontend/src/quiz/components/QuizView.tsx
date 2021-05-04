import React from 'react';
import { useDefaultProps, FC } from 'react-default-props-context';
import { observer } from 'mobx-react-lite';
import { Keyboard } from 'src/keyboard/components/Keyboard';
import { QuizFrame } from 'src/quiz/components';
import { QuizState } from 'src/quiz/QuizState';

type PropsT = {};

type DefaultPropsT = {
  quizState: QuizState;
};

export const QuizView: FC<PropsT, DefaultPropsT> = observer((p: PropsT) => {
  const props = useDefaultProps<PropsT, DefaultPropsT>(p);

  const onClick = React.useMemo(() => () => props.quizState.pickRandomChord(), [
    props.quizState,
  ]);
  return (
    <QuizFrame>
      <Keyboard onClick={onClick} />
    </QuizFrame>
  );
});
