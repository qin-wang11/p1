import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [{
    title:"用户姓名",
    dataIndex:'userName',
    key:'username'
  },
  {
    title:"书名",
    dataIndex:'bookname',
    key:'bookname'
  },
  {
    title:"借书时间",
    dataIndex:'bookname',
    key:'bookname'
  },
  {
    title:"借书时间",
    dataIndex:'bookname',
    key:'bookname'
  },
  {
    title:"借书时间",
    dataIndex:'bookname',
    key:'bookname'
  },
];

const data = [
  {
    title:"bookname",
    dataIndex:'bookname',
    key:'bookname'
  },
  {
    title:"bookname",
    dataIndex:'bookname',
    key:'bookname'
  },
  {
    title:"bookname",
    dataIndex:'bookname',
    key:'bookname'
  },
];
// const data = [{

// }];
class LendList1 extends Component{
render(){
  return(
      <Table columns={columns} dataSource={data} />
  )
}
}
export default LendList1;