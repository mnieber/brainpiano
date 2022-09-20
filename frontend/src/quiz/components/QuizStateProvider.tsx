import { action, reaction } from 'mobx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { withDefaultProps } from 'react-default-props-context';

import { CtrProvider } from 'react-default-props-context';
import { useStore } from 'src/app/components';
import { QuizState } from 'src/quiz/QuizState';

type PropsT = React.PropsWithChildren<{}>;

type DefaultPropsT = {};

export const QuizStateProvider = observer(
  withDefaultProps<PropsT, DefaultPropsT>((props: PropsT & DefaultPropsT) => {
    const { groupsStore, clefStore, voicingStore, preselectionStore } =
      useStore();

    const createState = action(() => {
      const state = new QuizState({
        groupsStore,
        voicingStore,
        preselectionStore,
      });
      return state;
    });

    const updateState = (state: QuizState) => {
      reaction(
        () => ({
          clef: clefStore.clef,
          groups: groupsStore.selection.items,
        }),
        (inputs) => {
          state.setClef(inputs.clef);
          state.setGroups(inputs.groups);
        },
        {
          fireImmediately: true,
        }
      );
    };

    const getDefaultProps = (state: QuizState) => {
      return {
        quizState: () => state,
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
