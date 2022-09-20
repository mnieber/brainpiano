import { observer } from 'mobx-react-lite';
import React from 'react';
import { withDefaultProps } from 'react-default-props-context';
import { Keyboard } from 'src/keyboard/components/Keyboard';
import { QuizFrame } from 'src/quiz/components';
import { QuizState } from 'src/quiz/QuizState';

type PropsT = {};

type DefaultPropsT = {
  quizState: QuizState;
};

export const QuizView = observer(
  withDefaultProps<PropsT, DefaultPropsT>((props: PropsT & DefaultPropsT) => {
    const onClick = React.useMemo(
      () => () => props.quizState.pickRandomChord(),
      [props.quizState]
    );
    return (
      <QuizFrame>
        <Keyboard onClick={onClick} />
      </QuizFrame>
    );
  })
);
