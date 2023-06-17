import { stub } from 'aspiration';
import { observer } from 'mobx-react-lite';
import { withDefaultProps } from 'react-default-props-context';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { QuizState } from '/src/quiz/QuizState';

type PropsT = React.PropsWithChildren<{}>;

const DefaultProps = {
  quizState: stub as QuizState,
};

export const RandomChordSelector = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    return (
      <KeyboardEventHandler
        handleKeys={['space', 'enter']}
        onKeyEvent={(key: string, e: any) => {
          props.quizState.pickRandomChord();
        }}
      >
        {props.children}
      </KeyboardEventHandler>
    );
  }, DefaultProps)
);
