import { EventT } from 'src/utils/types';
import { QuizState } from 'src/quiz/QuizState';

export const selectClefBasedOnPreselection = () => (quizState: QuizState) => {
  const handler = (event: EventT) => {
    if (quizState.query && event.topic === 'PreselectionStore.selectClef') {
      quizState.query.clef =
        event.details.clefLetter +
        (event.details.isSharpening
          ? '#'
          : event.details.isFlattening
          ? 'b'
          : '');
      quizState.props.clefStore.setClef(quizState.query.clef);
    }
  };

  quizState.props.preselectionStore.signal.add(handler as any);
  return () => quizState.props.preselectionStore.signal.remove(handler);
};
