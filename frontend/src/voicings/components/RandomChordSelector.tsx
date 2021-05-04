import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useDefaultProps, FC } from 'react-default-props-context';
import { QuizState } from 'src/quiz/QuizState';

type PropsT = React.PropsWithChildren<{}>;

type DefaultPropsT = {
  quizState: QuizState;
};

export const RandomChordSelector: FC<PropsT, DefaultPropsT> = observer(
  (p: PropsT) => {
    const props = useDefaultProps<PropsT, DefaultPropsT>(p);

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
  }
);
