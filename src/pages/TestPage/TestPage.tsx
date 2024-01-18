import type { UploadProps } from 'antd';
import { Typography } from 'antd';
import { Button, message, Upload } from 'antd';
import { observer } from 'mobx-react-lite';

import { BASE_URL } from '../../api/api';

export const TestPage = observer(() => {
  const props: UploadProps = {
    name: 'file',
    action: BASE_URL + '/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <Typography.Title level={2}>Загрузка статических фаилов</Typography.Title>
      <Upload {...props}>
        <Button>Загрузить</Button>
      </Upload>
    </>
  );
});
