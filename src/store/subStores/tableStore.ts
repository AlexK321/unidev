import { AxiosResponse } from 'axios';
import { makeAutoObservable } from 'mobx';

import { mockApi } from '../../api/api';

class TableStoreClass {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: AxiosResponse<any> | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getProductsAction = async () => {
    try {
      this.products = await mockApi.getProducts();
    } catch (error) {
      console.error(error);
    }
  };
}

export const tableStore = new TableStoreClass();
