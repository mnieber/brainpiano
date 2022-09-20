import { observer } from 'mobx-react-lite';
import { withDefaultProps } from 'react-default-props-context';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { QuizState } from 'src/quiz/QuizState';

type PropsT = React.PropsWithChildren<{}>;

type DefaultPropsT = {
  quizState: QuizState;
};

export const RandomChordSelector = observer(
  withDefaultProps<PropsT, DefaultPropsT>((props: PropsT & DefaultPropsT) => {
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
  })
);
