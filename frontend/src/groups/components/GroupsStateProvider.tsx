import { reaction } from 'mobx';
import { values } from 'ramda';
import * as React from 'react';
import { CtrProvider } from 'react-default-props-context';
import { useStore } from 'src/app/components';
import { GroupsState } from 'src/groups/GroupsState';

type PropsT = React.PropsWithChildren<{}>;

// Note: don't observe this with MobX
export const GroupsStateProvider: React.FC<PropsT> = (props: PropsT) => {
  const { groupsStore } = useStore();

  const createState = () => {
    return new GroupsState({
      groupsStore,
    });
  };

  const updateState = (state: GroupsState) => {
    reaction(
      () => ({
        groups: values(groupsStore.groupById),
      }),
      (inputs) => {
        state.inputs.groups = inputs.groups;
      },
      {
        fireImmediately: true,
      }
    );
  };

  const getDefaultProps = (state: GroupsState) => {
    return {
      groupsState: () => state,
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
      destroyCtr={(state: GroupsState) => state.destroy()}
      getDefaultProps={getDefaultProps}
    >
      {props.children}
    </CtrProvider>
  );
};
