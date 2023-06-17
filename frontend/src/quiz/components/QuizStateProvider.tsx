import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { withDefaultProps } from 'react-default-props-context';
import { useUpdateStateReaction } from '/src/frames/hooks/useUpdateStateReaction';
import { useBuilder } from '/src/utils/hooks/useBuilder';

import { DefaultPropsProvider } from 'react-default-props-context';
import { useStore } from '/src/app/components';
import { QuizState } from '/src/quiz/QuizState';

type PropsT = React.PropsWithChildren<{}>;

const DefaultProps = {};

export const QuizStateProvider = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const { groupsStore, clefStore, voicingStore } = useStore();

    const quizState = useBuilder(() => {
      return new QuizState({
        clefStore,
        voicingStore,
      });
    });

    useUpdateStateReaction({
      getInputs: () => {
        return {
          clefs: clefStore.selection.ids,
          groups: groupsStore.selection.items,
        };
      },
      updateState: (inputs: any) => {
        quizState.setClefs(inputs.clefs);
        quizState.setGroups(inputs.groups);
      },
    });

    const getDefaultPropsContext = () => {
      return {
        defaultProps: {
          quizState: () => quizState,
        },
      };
    };

    return (
      <DefaultPropsProvider extend value={getDefaultPropsContext()}>
        {props.children}
      </DefaultPropsProvider>
    );
  }, DefaultProps)
);
