import Table from "@/components/Table";
import { useEffect, useState } from "react";
import Problem from "./Problem";

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
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1)
    }, 1000)
  }, [])

  const amount = data.reduce((prev, item) => (prev + item.age), 0)
  console.log('ok')
  return (
    <div>
      <title>List Page {amount}</title>
      <Problem />
    </div>
  )
}

export default List