import Table from "@/components/Table";

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    render: (text: any) => <div>{text}</div>
}, {
  title: 'age',
  dataIndex: 'age',
  key: 'age',
  width: 150,
  render: (text: any) => <div>{text}</div>
}
];

const data = [{
  id: 1,
  name: 'abc',
  age: 23,
}, {
  id: 2,
  name: 'def',
  age: 24
}]

const List = () => {

  return (
    <Table columns={columns} dataSource={data} />
    // <div>List page

    // </div>
  )
}

export default List