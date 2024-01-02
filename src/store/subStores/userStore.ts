import { AxiosResponse } from 'axios';
import { makeAutoObservable } from 'mobx';

import { mockApi } from '../../api/api';

class UserStoreClass {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userData: AxiosResponse<any> | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getUserDataAction = async () => {
    try {
      this.userData = await mockApi.getUserData();
    } catch (error) {
      console.error(error);
    }
  };
}

export const userStore = new UserStoreClass();
