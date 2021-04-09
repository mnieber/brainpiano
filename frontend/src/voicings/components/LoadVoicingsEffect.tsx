import React from 'react';

import { EffectWithoutArgs } from 'src/utils/components';
import { useStore } from 'src/app/components/StoreProvider';

type PropsT = {};

export const LoadVoicingsEffect: React.FC<PropsT> = (p: PropsT) => {
  const { voicingsStore } = useStore();
  return (
    <EffectWithoutArgs
      f={() => {
        voicingsStore.loadVoicings();
      }}
    />
  );
};