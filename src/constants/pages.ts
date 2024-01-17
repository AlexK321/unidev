export interface IPage {
  path: string;
  id: string;
  title: string;
}

export const PAGES: { [key: string]: IPage } = {
  USER_INFO_PAGE: {
    path: '/userInfo',
    id: 'userInfo',
    title: 'Общая информация',
  },
  TABLE_PAGE: {
    path: '/table',
    id: 'table',
    title: 'Таблица',
  },
  CHART_PAGE: {
    path: '/chart',
    id: 'chart',
    title: 'График',
  },
  AUTH_PAGE: {
    path: '/',
    id: 'auth',
    title: 'Авторизация',
  },
};
