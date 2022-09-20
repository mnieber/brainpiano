import { action, reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { withDefaultProps } from 'react-default-props-context';

import { CtrProvider } from 'react-default-props-context';
import { useStore } from 'src/app/components';
import { QuizState } from 'src/quiz/QuizState';
import { parseVoicingGroups } from 'src/voicings/parse';
import { voicingGroups } from 'src/voicings/voicingGroups';

type PropsT = React.PropsWithChildren<{}>;

type DefaultPropsT = {};

export const QuizStateProvider = observer(
  withDefaultProps<PropsT, DefaultPropsT>((props: PropsT & DefaultPropsT) => {
    const { groupsStore, clefStore, voicingStore, preselectionStore } =
      useStore();
    const groups = parseVoicingGroups(voicingGroups);

    const createState = action(() => {
      const state = new QuizState({
        groupsStore,
        voicingStore,
        preselectionStore,
      });
      state.setGroups(groups);
      return state;
    });

    const updateState = (state: QuizState) => {
      reaction(
        () => ({
          clef: clefStore.clef,
        }),
        (inputs) => {
          state.setClef(inputs.clef);
        },
        {
          fireImmediately: true,
        }
      );
    };

    const getDefaultProps = (state: QuizState) => {
      return {
        quizState: () => state,
        groups: () => state.data.outputs.groupsDisplay,
        groupsSelection: () => state.groups.selection,
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
  })
);
