export interface IPage {
  path: string;
  id: string;
  title: string;
}

export const PAGES: { [key: string]: IPage } = {
  USER_INFO_PAGE: {
    path: '/',
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
};
