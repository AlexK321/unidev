import { List, Typography } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { toJS } from "mobx";
import { useEffect } from "react";

export const UserInfoPage = observer(() => {
  const { userStore } = useStore();
  const userData = userStore.userData && toJS(userStore.userData).data;

  const USER_DESCRIPTION = [
    `Имя: ${userData?.name}`,
    `Фамилия: ${userData?.surName}`, 
    `Дата рождения: ${userData?.birthDay}`,
    `Адрес: ${userData?.address}`,
    `Телефон: ${userData?.phoneNumber}`,
    `Электронная почта: ${userData?.email}`,
  ]

  useEffect(() => {
    userStore.getUserDataAction()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Typography.Title level={2}>О пользователе</Typography.Title>
      <List
        itemLayout="vertical"
        dataSource={USER_DESCRIPTION}
        renderItem={(item) => (<div><Typography.Text>{item}</Typography.Text></div>
        )}
      />
    </>
  );
});
