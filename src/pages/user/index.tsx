import { history } from 'umi';
import { Table, Popconfirm, Button } from 'antd';
const logout = () => {
  window.localStorage.removeItem('user')
  history.push('/login')
}

const products = [
  {
    // key:1, // table要求必须有key
    id:1,
    name: "张三",
  },
  {
    // key: 2,
    id: 2,
    name: "李四"
  }
]
const onDelete = (id: number) => {
  alert('delete' + id)
}

const ProductList = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text: any, record: any) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <div>
    <h2>user list page</h2>
    <Button type="primary" danger onClick={() => {
            logout()
          }}>
      退出
    </Button>
    <Table dataSource={products} rowKey={'id'} columns={columns} />
  </div>;
};

export default ProductList;
