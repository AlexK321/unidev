import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Typography } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

import { useStore } from '../../store';

import { AuthContainer } from './AuthPage.styles';

export const AuthPage = observer(() => {
  const { userStore } = useStore();
  const navigate = useNavigate();

  const isAuth = toJS(userStore).isAuth;

  // похорошему написать в React Hook Form, но пока так
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (isAuth) {
      navigate('/chart');
    }
  }, [isAuth]);

  const onRegistrationClick = () => {
    userStore.registrationAction(userName, password);
  };

  const onAuthClick = () => {
    userStore.authAction(userName, password);
  };

  return (
    <AuthContainer>
      <Typography.Title level={2}>Страница регистрации и входа</Typography.Title>
      <Input placeholder="Enter your username" onChange={e => setUserName(e.target.value)} />
      <Input.Password placeholder="input password" onChange={e => setPassword(e.target.value)} />
      <div>
        <Button type="primary" onClick={onRegistrationClick}>
          Регистрация
        </Button>
        <Button onClick={onAuthClick}>Авторизация</Button>
      </div>
    </AuthContainer>
  );
});
