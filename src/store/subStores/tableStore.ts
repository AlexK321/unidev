import { AxiosResponse } from 'axios';
import { makeAutoObservable } from 'mobx';

import { mockApi } from '../../api/api';

class TableStoreClass {
  products: AxiosResponse<any> | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getProductsAction = async () => {
    try {
      this.products = await mockApi.getProducts();
    } catch (error) {
      console.log(error);
    }
  };
}

export const tableStore = new TableStoreClass();
