import { createContext, useContext } from 'react';

import RootStore from './root-store';

export const RootStoreContext = createContext<RootStore | any>(null);

export const useStore = (): RootStore => {
  const context = useContext(RootStoreContext);

  return context;
};
