import { Table as AntdTable, Typography } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { toJS } from "mobx";
import { useEffect } from "react";

interface IDataSource {
  id: number;
  product: string;
  price: number;
  waitingTime: number;
}


export const Table = observer(() => {
  const { tableStore } = useStore();
  const tableData = tableStore.products && toJS(tableStore.products).data;

  useEffect(() => {
    tableStore.getProductsAction()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dataSource = tableData?.map((item: IDataSource) => {
    return {
      id: item.id,
      product: item.product,
      price: item.price,
      waitingTime: item.waitingTime,
    }
  })
  
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Продукт',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Стоимость',
      dataIndex: 'price',
      key: 'price',
      sorter: (a: IDataSource, b: IDataSource) => a.price - b.price
    },
    {
      title: 'Ожидание',
      dataIndex: 'waitingTime',
      key: 'waitingTime',
      render: (value: number) =>  value > 0 ? value : <Typography.Text mark>{value}</Typography.Text>,
      sorter: (a: IDataSource, b: IDataSource) => a.waitingTime - b.waitingTime
    },
  ];
  
  return (
    <AntdTable dataSource={dataSource} columns={columns} style={{overflowX: 'auto'}}/>
  );
});
