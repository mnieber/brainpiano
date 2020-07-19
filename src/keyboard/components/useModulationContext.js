import React from 'react';

import { useModulation } from 'src/keyboard/components/useModulation';

const ModulationContext = React.createContext();

export const ModulationProvider = ({ children }) => {
  const modulation = useModulation();

  return (
    <ModulationContext.Provider value={modulation}>
      {children}
    </ModulationContext.Provider>
  );
};

export const withModulationContext = C => props => (
  <ModulationProvider>
    <C {...props} />
  </ModulationProvider>
);

export const useModulationContext = () => {
  const context = React.useContext(ModulationContext);
  if (context === undefined) {
    throw new Error(
      'useModulationContext must be used within a ModulationContextProvider'
    );
  }
  return context;
};
