import { makeAutoObservable } from 'mobx';

class AppStateStoreClass {
  theme = 'dark';

  constructor() {
    makeAutoObservable(this);
  }

  setTheme = (value: string) => {
    this.theme = value;
  };
}

export const appStateStore = new AppStateStoreClass();
