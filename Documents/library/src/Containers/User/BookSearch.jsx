import React, { Component } from 'react';
import { Input,Table,Button } from 'antd';
import Style from './index.module.scss';
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


const { Search } = Input;

class BookSearch extends Component{

  state={
    data:0
  }
  findBook = (value) =>{
    console.log(value);
    axios.post('http://localhost:3005/animal/findBook',{
          value:value
        }).then((res) => {
          console.log(res);
          this.setState({data:res.data})

        // this.setState({ss
        //   data:res.data
        // })
        
      })
  }
render(){
  return(
    <div>
        <div>
            <br/>
            <br/>
    <Search className={Style.wq}
      placeholder="input search text"
      onSearch={value => this.findBook(value)}
      style={{ width: 200 }}/>
      </div>
      <br/>
      <br/>
      <div>
      <Table columns={columns} dataSource={this.state.data} />
      </div>
  
  </div>
  )
}
}
export default BookSearch;