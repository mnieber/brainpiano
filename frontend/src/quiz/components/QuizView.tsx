import { observer } from 'mobx-react-lite';
import React from 'react';
import { withDefaultProps } from 'react-default-props-context';
import { stub } from 'skandha';
import { Keyboard } from '/src/keyboard/components/Keyboard';
import { QuizState } from '/src/quiz/QuizState';
import { QuizFrame } from '/src/quiz/components';

type PropsT = {};

const DefaultProps = {
  quizState: stub as QuizState,
};

export const QuizView = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const onClick = React.useMemo(
      () => () => props.quizState.pickRandomChord(),
      [props.quizState]
    );
    return (
      <QuizFrame>
        <Keyboard onClick={onClick} />
      </QuizFrame>
    );
  }, DefaultProps)
);
