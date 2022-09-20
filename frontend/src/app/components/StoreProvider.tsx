import React from 'react';
import { AppStore } from 'src/app/AppStore';

const appStore = new AppStore();

export const StoreContext = React.createContext<AppStore>(appStore);

type PropsT = React.PropsWithChildren<{}>;

export const StoreProvider = (props: PropsT) => {
  return (
    <StoreContext.Provider value={appStore}>
      {props.children}
    </StoreContext.Provider>
  );
};
