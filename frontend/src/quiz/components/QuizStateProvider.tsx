import { action, reaction } from 'mobx';
import * as React from 'react';

import { CtrProvider } from 'react-default-props-context';
import { useStore } from 'src/app/components';
import { clefs } from 'src/keyboard/keyConstants';
import { QuizState } from 'src/quiz/QuizState';
import { parseVoicingGroups } from 'src/voicings/parse';
import { voicingGroups } from 'src/voicings/voicingGroups';

type PropsT = React.PropsWithChildren<{}>;

// Note: don't observe this with MobX
export const QuizStateProvider: React.FC<PropsT> = (props: PropsT) => {
  const { groupsStore, clefStore, voicingStore, preselectionStore } =
    useStore();
  const groups = parseVoicingGroups(voicingGroups);

  const createState = action(() => {
    const state = new QuizState({
      groupsStore,
      clefStore,
      voicingStore,
      preselectionStore,
    });
    state.setClefs(clefs);
    state.setGroups(groups);
    return state;
  });

  const updateState = (state: QuizState) => {
    reaction(
      () => ({}),
      (inputs) => {},
      {
        fireImmediately: true,
      }
    );
  };

  const getDefaultProps = (state: QuizState) => {
    return {
      quizState: () => state,
      clefs: () => state.data.outputs.clefsDisplay,
      clefsSelection: () => state.clefs.selection,
      clefsHighlight: () => state.clefs.highlight,
      clef: () => state.clefs.highlight.item,
      groups: () => state.data.outputs.groupsDisplay,
      groupsSelection: () => state.groups.selection,
      groupsHighlight: () => state.groups.highlight,
      group: () => state.groups.highlight.item,
    };
  };

  return (
    <CtrProvider
      createCtr={createState}
      updateCtr={updateState}
      destroyCtr={(state: QuizState) => state.destroy()}
      getDefaultProps={getDefaultProps}
    >
      {props.children}
    </CtrProvider>
  );
};
