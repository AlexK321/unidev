import { Layout as AntLayout, Menu, MenuTheme, Typography} from 'antd';
import { PAGES } from '../../constants';
import Sider, { SiderTheme } from 'antd/es/layout/Sider';
import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import { useTheme } from '../../hooks/useTheme';
import { observer } from 'mobx-react-lite';
import { Radio, RadioItem } from '../../core/Radio';
import { ContextWrapper, Footer, Header, RadioContainer } from './Layouts.styles';
import { Devices, useWindowParams } from '../../hooks/useWindowParams';


export const Layout = observer(({ children, onThemeChange }: {children: ReactElement, onThemeChange: (arg: string) => void }) => {
  const navigate = useNavigate();
  const { appStateStore } = useStore();
  const { device } = useWindowParams();
  const theme = useTheme();

  const [currentItem, setCurrentItem] = useState<Record<string, any> | undefined>(undefined);

  const items = Object.values(PAGES).map((item) => ({
    key: item.title,
    label: item.title,
  }));

  const [collapsed, setCollapsed] = useState(false);

  const handleChangeTheme = (e: any) => {
    appStateStore.setTheme(e.target.value)
    onThemeChange(e.target.value);
  }

  const handleSelect = (e: any) => {
    const currentItem = Object.entries(PAGES).find((item) => item[1].title === e.key)?.[1];
    setCurrentItem(currentItem);
    navigate(currentItem?.path || '');
  }
  
  return (
     <AntLayout style={{  maxWidth: '100vw', overflowX: 'hidden', minHeight: '100vh'}} >
      {device === Devices.DESKTOP && 
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme={theme as SiderTheme}>
          <Menu theme={theme as MenuTheme} defaultSelectedKeys={['1']} mode="inline" items={items} onSelect={handleSelect} />
        </Sider>
      }
      <AntLayout>
        {device !== Devices.DESKTOP && 
            <Menu theme={theme as MenuTheme} defaultSelectedKeys={['1']} mode="horizontal" items={items} onSelect={handleSelect}/>
        }
        <Header>
          <Typography.Title level={2}>{currentItem?.title || PAGES.USER_INFO_PAGE.title}</Typography.Title>
        </Header>
        <ContextWrapper >
          {children}
        </ContextWrapper>
        <Footer style={{ textAlign: 'center', position: 'relative' }}>
          <>
          UNIDEV 2023
          <RadioContainer >
            <Radio defaultValue="dark" buttonStyle="solid" onChange={handleChangeTheme}>
              <RadioItem value="light">Light</RadioItem>
              <RadioItem value="dark">Dark</RadioItem>
            </Radio>
          </RadioContainer>
          </>
        </Footer>
      </AntLayout>
    </AntLayout>
  );
});
