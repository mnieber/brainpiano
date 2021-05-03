import * as React from 'react';
import { reaction } from 'mobx';
import { values } from 'lodash/fp';

import { QuizState } from 'src/quiz/QuizState';
import { CtrProvider } from 'react-default-props-context';
import { useStore } from 'src/app/components';
import { voicingGroupById } from 'src/voicings/voicingValues';
import { getIds } from 'src/utils/ids';
import { clefs } from 'src/keyboard/keyConstants';

type PropsT = React.PropsWithChildren<{}>;

// Note: don't observe this with MobX
export const QuizStateProvider: React.FC<PropsT> = (props: PropsT) => {
  const { groupsStore } = useStore();
  const groups = values(voicingGroupById);

  const createState = () => {
    const state = new QuizState({
      groupsStore,
    });
    state.inputs.clefs = clefs;
    state.clefs.selection.ids = clefs;

    state.inputs.groups = values(voicingGroupById);
    state.groups.selection.ids = getIds(groups);

    return state;
  };

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
      clefs: () => state.outputs.clefsDisplay,
      clefsSelection: () => state.clefs.selection,
      clefsHighlight: () => state.clefs.highlight,
      clef: () => state.clefs.highlight.item,
      groups: () => state.outputs.groupsDisplay,
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
