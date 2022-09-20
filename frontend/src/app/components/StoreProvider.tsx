import React from 'react';
import { NestedDefaultPropsProvider } from 'react-default-props-context';
import { AppStore } from 'src/app/AppStore';
import { selectClefBasedOnPreselection } from 'src/quiz/QuizState/policies/selectClefBasedOnPreselection';

const appStore = new AppStore();
selectClefBasedOnPreselection(appStore.clefStore, appStore.preselectionStore);

export const StoreContext = React.createContext<AppStore>(appStore);

type PropsT = React.PropsWithChildren<{}>;

export const StoreProvider = (props: PropsT) => {
  const defaultProps = {
    clefs: () => appStore.clefStore.selection.selectableIds,
    clefsSelection: () => appStore.clefStore.selection,
  };

  return (
    <StoreContext.Provider value={appStore}>
      <NestedDefaultPropsProvider value={defaultProps}>
        {props.children}
      </NestedDefaultPropsProvider>
    </StoreContext.Provider>
  );
};
