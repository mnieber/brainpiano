import { observer } from 'mobx-react-lite';
import { withDefaultProps } from 'react-default-props-context';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useSwipeable } from 'react-swipeable';
import { stub } from 'skandha';
import { useStore } from '/src/app/components';
import { QuizState } from '/src/quiz/QuizState';
import { QueryT } from '/src/quiz/types';
import { VoicingStore } from '/src/voicings/VoicingStore';
import { playChord } from '/src/voicings/utils/playChord';

type PropsT = React.PropsWithChildren<{}>;

const DefaultProps = {
  quizState: stub as QuizState,
};

export const InversionSelector = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const { voicingStore } = useStore();

    const swipeHandlers = useSwipeable({
      onSwipedLeft: (eventData) =>
        invertLeft(voicingStore, props.quizState.query),
      onSwipedRight: (eventData) =>
        invertRight(voicingStore, props.quizState.query),
      preventDefaultTouchmoveEvent: true,
      trackMouse: false,
    });

    return (
      <KeyboardEventHandler
        handleKeys={['ctrl+left', 'ctrl+right']}
        onKeyEvent={(key: string, e: any) => {
          if (key === 'ctrl+right') {
            invertRight(voicingStore, props.quizState.query);
          }
          if (key === 'ctrl+left') {
            invertLeft(voicingStore, props.quizState.query);
          }
        }}
      >
        <KeyboardEventHandler
          handleKeys={['p']}
          onKeyEvent={(key: string, e: any) => {
            if (voicingStore.chord) {
              playChord(voicingStore.chord, voicingStore.clef);
            }
          }}
        >
          <div {...swipeHandlers}>{props.children}</div>
        </KeyboardEventHandler>
      </KeyboardEventHandler>
    );
  }, DefaultProps)
);

function invertRight(voicingStore: VoicingStore, query?: QueryT) {
  voicingStore.setInversion(voicingStore.inversion + 1);
  if (query) {
    query.inversion = voicingStore.inversion;
  }
}

function invertLeft(voicingStore: VoicingStore, query?: QueryT) {
  voicingStore.setInversion(voicingStore.inversion - 1);
  if (query) {
    query.inversion = voicingStore.inversion;
  }
}
