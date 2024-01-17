import axios from 'axios';
//можно удалить моковый сервер и переписать его запросы на настоящий
// mock api

const MOCK_BASE_URL = 'http://localhost:3001';

const baseMockApi = axios.create({ baseURL: MOCK_BASE_URL });

export const mockApi = {
  getProducts: async () => baseMockApi.get('products'),
  getUserData: async () => baseMockApi.get('profile'),
  getChartData: async () => baseMockApi.get('chart'),
};

//antd api

const CHART_BASE_URL = 'https://gw.alipayobjects.com';

const baseChartApi = axios.create({ baseURL: CHART_BASE_URL });

export const chartApi = {
  getChart: async () => baseChartApi.get('/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json'),
};

//myServer api

const BASE_URL = 'http://localhost:5000';

const baseApi = axios.create({ baseURL: BASE_URL });

export const authApi = {
  registrations: async (data: any) => baseApi.post('/auth/registrations', data),
  login: async (data: any) => baseApi.post('/auth/login', data),
  getUsers: async () => baseApi.get('/auth/users'),
};

const authRequestInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

baseApi.interceptors.request.use(authRequestInterceptor);

const authResponseInterceptor = (error: any) => {
  if (error.response.status === 401 || error.response.status === 403) {
    localStorage.removeItem('token');
    window.location.reload();
  }
};

baseApi.interceptors.response.use(response => response, authResponseInterceptor);
