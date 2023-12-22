import {
    BrowserRouter,
    Outlet,
    Route,
    Routes,
  } from 'react-router-dom';
import { UserInfoPage } from './UserInfoPage';
import { Layout } from '../components/Layout/Layout';
import { PAGES } from '../constants';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../theme';
import {  useState } from 'react';
import { Table } from './Table';
import { Chart } from './Chart';
  
export const AppRoutes = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('dark');

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
          <Route element={renderLayout()}>
            <Route path={PAGES.USER_INFO_PAGE.path} element={<UserInfoPage />}/>
            <Route path={PAGES.TABLE_PAGE.path} element={<Table />} />
            <Route path={PAGES.CHART_PAGE.path} element={<Chart />} />
          </Route>
          <Route path="*" element={<> Error page</>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  )
};
