import { useDefaultProps, FC } from 'react-default-props-context';
import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useStore } from 'src/app/components';
import { playChord } from 'src/voicings/utils/playChord';
import { QuizState } from 'src/quiz/QuizState';

type PropsT = React.PropsWithChildren<{}>;

type DefaultPropsT = {
  quizState: QuizState;
};

export const InversionSelector: FC<PropsT, DefaultPropsT> = observer(
  (p: PropsT) => {
    const props = useDefaultProps<PropsT, DefaultPropsT>(p);
    const { voicingStore } = useStore();
    return (
      <KeyboardEventHandler
        handleKeys={['ctrl+left', 'ctrl+right']}
        onKeyEvent={(key: string, e: any) => {
          if (key === 'ctrl+right') {
            voicingStore.setInversion(voicingStore.inversion + 1);
            if (props.quizState.query) {
              props.quizState.query.inversion = voicingStore.inversion;
            }
          }
          if (key === 'ctrl+left') {
            voicingStore.setInversion(voicingStore.inversion - 1);
            if (props.quizState.query) {
              props.quizState.query.inversion = voicingStore.inversion;
            }
          }
        }}
      >
        <KeyboardEventHandler
          handleKeys={['p']}
          onKeyEvent={(key: string, e: any) => {
            playChord(voicingStore.chord, voicingStore.clef);
          }}
        >
          {props.children}
        </KeyboardEventHandler>
      </KeyboardEventHandler>
    );
  }
);
