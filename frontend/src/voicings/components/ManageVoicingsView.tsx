import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/app/components/StoreProvider';

type PropsT = {
};

export const ManageVoicingsView: React.FC<PropsT> = observer(() => {
  const { voicingsStore } = useStore();

  const formDiv = (
    <div className="ManageVoicingsView flex flex-col w-full">
      TODO: Implement ManageVoicingsView
    </div>
  );

  return formDiv;
});