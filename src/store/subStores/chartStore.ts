import { AxiosResponse } from 'axios';
import { makeAutoObservable } from 'mobx';

import { chartApi } from '../../api/api';

class ChartStoreClass {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chartData: AxiosResponse<any> | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getChartDataAction = async () => {
    try {
      this.chartData = await chartApi.getChart();
    } catch (error) {
      console.error(error);
    }
  };
}

export const chartStore = new ChartStoreClass();
