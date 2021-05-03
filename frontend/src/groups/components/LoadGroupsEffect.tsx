import React from 'react';

import { EffectWithoutArgs } from 'src/utils/components';
import { useStore } from 'src/app/components';

type PropsT = {};

export const LoadGroupsEffect: React.FC<PropsT> = (p: PropsT) => {
  const { groupsStore } = useStore();
  return (
    <EffectWithoutArgs
      f={() => {
        groupsStore.loadGroups();
      }}
    />
  );
};