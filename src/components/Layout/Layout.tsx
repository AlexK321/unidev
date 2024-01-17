import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Layout as AntLayout, Menu, MenuProps, MenuTheme, RadioChangeEvent, Typography } from 'antd';
import Sider, { SiderTheme } from 'antd/es/layout/Sider';
import { observer } from 'mobx-react-lite';

import { IPage, PAGES } from '../../constants';
import { Radio, RadioItem } from '../../core/Radio';
import { useTheme } from '../../hooks/useTheme';
import { Devices, useWindowParams } from '../../hooks/useWindowParams';
import { useStore } from '../../store';

import { ContextWrapper, Footer, Header, RadioContainer } from './Layouts.styles';

export const Layout = observer(
  ({ children, onThemeChange }: { children: ReactElement; onThemeChange: (arg: string) => void }) => {
    const navigate = useNavigate();
    const { appStateStore } = useStore();
    const { device } = useWindowParams();
    const theme = useTheme();

    const { userStore } = useStore();

    const [currentItem, setCurrentItem] = useState<IPage | undefined>(undefined);

    const items = Object.values(PAGES)
      .filter(item => item.title !== 'Авторизация')
      .map(item => ({
        key: item.title,
        label: item.title,
      }));
    const [collapsed, setCollapsed] = useState(false);

    const handleChangeTheme = (e: RadioChangeEvent) => {
      appStateStore.setTheme(e.target.value);
      onThemeChange(e.target.value);
    };

    const handleSelect: MenuProps['onClick'] = e => {
      const currentItem = Object.entries(PAGES).find(item => item[1].title === e.key)?.[1];
      setCurrentItem(currentItem);
      navigate(currentItem?.path || '');
    };

    const onLogoutClick = () => {
      localStorage.removeItem('token');
      userStore.setIsAuth(false);
      navigate(PAGES.AUTH_PAGE.path);
    };

    return (
      <AntLayout style={{ maxWidth: '100vw', overflowX: 'hidden', minHeight: '100vh' }}>
        {device === Devices.DESKTOP && (
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={value => setCollapsed(value)}
            theme={theme as SiderTheme}
          >
            <Menu
              theme={theme as MenuTheme}
              defaultSelectedKeys={['1']}
              mode="inline"
              items={items}
              onSelect={handleSelect}
            />
          </Sider>
        )}
        <AntLayout>
          {device !== Devices.DESKTOP && (
            <Menu
              theme={theme as MenuTheme}
              defaultSelectedKeys={['1']}
              mode="horizontal"
              items={items}
              onSelect={handleSelect}
            />
          )}
          <Header>
            <Typography.Title level={2}>{currentItem?.title || PAGES.USER_INFO_PAGE.title}</Typography.Title>
          </Header>
          <ContextWrapper>{children}</ContextWrapper>
          <Footer style={{ textAlign: 'center', position: 'relative' }}>
            <>
              UNIDEV 2023
              <RadioContainer>
                <Radio defaultValue="dark" buttonStyle="solid" onChange={handleChangeTheme}>
                  <RadioItem value="light">Light</RadioItem>
                  <RadioItem value="dark">Dark</RadioItem>
                </Radio>
              </RadioContainer>
              <Button type="primary" danger ghost onClick={onLogoutClick}>
                Выйти
              </Button>
            </>
          </Footer>
        </AntLayout>
      </AntLayout>
    );
  },
);
