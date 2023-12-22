import { makeAutoObservable } from "mobx";
import { mockApi } from "../../api/api";
import { AxiosResponse } from "axios";

class UserStoreClass {
  userData: AxiosResponse<any> | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getUserDataAction = async() => {
    try {
      this.userData = await mockApi.getUserData();
    } catch (error) {
      console.log(error);
    }
  }
}

export const userStore = new UserStoreClass();