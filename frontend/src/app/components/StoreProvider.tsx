import React from 'react';
import { DefaultPropsProvider } from 'react-default-props-context';
import { AppStore } from '/src/app/AppStore';
import { selectClefBasedOnPreselection } from '/src/quiz/QuizState/policies/selectClefBasedOnPreselection';
import { parseVoicingGroups } from '/src/voicings/parse';
import { voicingGroups } from '/src/voicings/voicingGroups';

const groups = parseVoicingGroups(voicingGroups);

const appStore = new AppStore();
selectClefBasedOnPreselection(appStore.clefStore, appStore.preselectionStore);
appStore.groupsStore.setGroups(groups);

export const StoreContext = React.createContext<AppStore>(appStore);

type PropsT = React.PropsWithChildren<{}>;

export const StoreProvider = (props: PropsT) => {
  const defaultPropsContext = {
    defaultProps: {
      clefs: () => appStore.clefStore.selection.selectableIds,
      clefsSelection: () => appStore.clefStore.selection,
      groups: () => appStore.groupsStore.selection.items,
      groupsSelection: () => appStore.groupsStore.selection,
    },
  };

  return (
    <StoreContext.Provider value={appStore}>
      <DefaultPropsProvider extend value={defaultPropsContext}>
        {props.children}
      </DefaultPropsProvider>
    </StoreContext.Provider>
  );
};
