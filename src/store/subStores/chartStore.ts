import { AxiosResponse } from 'axios';
import { makeAutoObservable } from 'mobx';

import { chartApi } from '../../api/api';

class ChartStoreClass {
  chartData: AxiosResponse<any> | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getChartDataAction = async () => {
    try {
      this.chartData = await chartApi.getChart();
    } catch (error) {
      console.log(error);
    }
  };
}

export const chartStore = new ChartStoreClass();
