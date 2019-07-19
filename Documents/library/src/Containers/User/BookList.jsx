import React, { Component } from 'react';
import { Table ,Button} from 'antd';
import { Record } from '_immutable@3.8.2@immutable';
const axios = require('axios');

const columns = [{
    title:"书名",
    dataIndex:'b_name',
    key:'b_name'
  },
  {
    title:"作者",
    dataIndex:'author',
    key:'author'
  },
  {
    title:"出版社",
    dataIndex:'publish',
    key:'publish'
  },
  {
    title:"出版日期",
    dataIndex:'publishtime',
    key:'publishtime'
  },
  {
    title:"入库时间",
    dataIndex:'pushtime',
    key:'pushtime'
  },
  {
    title:"图书类型",
    dataIndex:'booktype',
    key:'booktype'
  },
  {
    title:"图书状态",
    dataIndex:'borrowstate',
    key:'borrowstate'
  },
  {
    title:"操作",
    key:"action",
    render:(text,Record)=>(
      <div>
        <Button type="primary">借书</Button>
      </div>
    ),
  }
];

// const data = [
//   {
//     title:"bookname",
//     dataIndex:'bookname',
//     key:'bookname'
//   },
//   {
//     title:"bookname",
//     dataIndex:'bookname',
//     key:'bookname'
//   },
//   {
//     title:"bookname",
//     dataIndex:'bookname',
//     key:'bookname'
//   },
// ];
const data = [{
  
}];
class BookList extends Component{
  state = {
    data:0
  }
  componentDidMount() {
    axios.get('http://localhost:3005/animal/list').then((data) => {
        this.setState({
          data:data.data
        })
        // console.log(data.data);
        // for(var i = 0;i < data.data.length;i++){
        //   data[i] = data.data[i];
        // }
        //data = data.data;
    })
  }
render(){
  return(
      <Table columns={columns} dataSource={this.state.data} />
  )
}
}
export default BookList;