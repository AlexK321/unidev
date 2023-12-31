import axios from 'axios';

const MOCK_BASE_URL = 'http://localhost:3001';

const baseMockApi = axios.create({ baseURL: MOCK_BASE_URL });

export const mockApi = {
  getProducts: async () => await baseMockApi.get('products'),
  getUserData: async () => await baseMockApi.get('profile'),
  getChartData: async () => await baseMockApi.get('chart'),
};

//

const CHART_BASE_URL = 'https://gw.alipayobjects.com';

const baseChartApi = axios.create({ baseURL: CHART_BASE_URL });

export const chartApi = {
  getChart: async () => await baseChartApi.get('/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json'),
};
