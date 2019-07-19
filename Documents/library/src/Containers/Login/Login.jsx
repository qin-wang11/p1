import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Style from './index.module.scss';
const axios = require('axios');
class Login extends Component {


  constructor(props){
    super(props);
  }
  handleSubmit = e => {
    e.preventDefault(); 
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post('http://localhost:3005/animal/check',{
          username:values.username,
          password:values.password
        }).then((res) => {

          console.log(res);
        // this.setState({ss
        //   data:res.data
        // })
        if(res.data == null||res.data ==""){
          alert("user or password is wrong!");
          
        }else{
          if(res.data.type==3){
            this.props.history.push('/Super');
          }else if(res.data.type==2){
            this.props.history.push('/Admin');
          }else if(res.data.type==1){
          this.props.history.push('/Lend');
          }
        }
        
        // console.log(data.data);
        // for(var i = 0;i < data.data.length;i++){
        //   data[i] = data.data[i];
        // }
        //data = data.data;
    })

       

      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={Style.login_form}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className={Style.login_formforgot} href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className={Style.login_form_button} >
            Log in
          </Button>
          Or <a href="/Register" >register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'normal_login' })(Login);