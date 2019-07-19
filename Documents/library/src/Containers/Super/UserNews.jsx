import React, { Component } from 'react';
import { NODE_URL } from '../../../config/config.js';
import { Table, Button } from 'antd';
const axios = require('axios');

const columns = [{
    title:"借书证号",
    dataIndex:'u_id',
    key:'u_id'
  },
  {
    title:"用户姓名",
    dataIndex:'u_name',
    key:'u_name'
  },
  {
    title:"密码",
    dataIndex:'password',
    key:'password'
  },
  {
    title:"年龄",
    dataIndex:'age',
    key:'age'
  },
  {
    title:"性别",
    dataIndex:'sex',
    key:'sex'
  },
  {
    title:"电话号码",
    dataIndex:'phone',
    key:'phone'
  },
  {
    title:"地址",
    dataIndex:'address',
    key:'address'
  },
  {
    title:"用户类型",
    dataIndex:'type',
    key:'type'
  },
  // {
  //   title:"操作",
  //   key:'operator',
  //   render:(text,record)=>(
  //     <div>
  //       <Button type="primary" onClick={handleclick1.bind(this,record.u_id)}>修改</Button>
  //       <Button type="danger" onClick={handleclick2.bind(this,record.u_id)}>删除</Button>
  //     </div>
  //   ),
  // },
];
// let history = 0;
// const handleclick1 = (u_id) =>{
//   history.push({
//     pathname:'./UpdateNews',state:{
//       u_id:u_id
//     }
//   });
// };

// const handleclick2= (u_id) =>{

//   axios.get('http://localhost:3005/animal/deleteuser',{
//           u_id:u_id
//         }).then((res) => {

//           console.log(res);
//           if(res.data=="success"){
//             alert("delete is success");
//           }else if(res.data="fail"){
//             alert("delete is fail!!!!");
//           }
//         });
          
// }

// const data = [{
  
// }];

class UserNews extends Component {
  handleSubmit= e =>{
    alert("e");
  }
  
    state = {
        data:0
      }
      componentDidMount() {
       // history = this.props.history;
        axios.get('http://localhost:3005/animal/a').then((data) => {
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
export default UserNews;