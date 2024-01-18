import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';

import { Layout } from '../components/Layout/Layout';
import { PAGES } from '../constants';
import { useStore } from '../store';
import { appTheme } from '../theme';

import { AuthPage } from './AuthPage';
import { Chart } from './Chart';
import { Table } from './Table';
import { TestPage } from './TestPage';
import { UserInfoPage } from './UserInfoPage';

export const AppRoutes = observer(() => {
  const [currentTheme, setCurrentTheme] = useState<string>('dark');
  const { userStore } = useStore();
  const isAuth = userStore.isAuth;

  const renderLayout = () => {
    const handleThemeChange = (theme: string) => setCurrentTheme(theme);
    return (
      <Layout onThemeChange={handleThemeChange}>
        <Outlet />
      </Layout>
    );
  };

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? appTheme.dark : appTheme.light}>
      <BrowserRouter>
        <Routes>
          <Route path={PAGES.AUTH_PAGE.path} element={<AuthPage />} />
          <Route element={renderLayout()}>
            <Route path={PAGES.TEST_PAGE.path} element={<TestPage />} />
          </Route>
          {isAuth && (
            <Route element={renderLayout()}>
              <Route path={PAGES.USER_INFO_PAGE.path} element={<UserInfoPage />} />s
              <Route path={PAGES.TABLE_PAGE.path} element={<Table />} />
              <Route path={PAGES.CHART_PAGE.path} element={<Chart />} />
            </Route>
          )}
          <Route path="*" element={<> Error page</>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
});
