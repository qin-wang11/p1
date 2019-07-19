import React, { Component } from 'react'
import {Form,Input,Tooltip,Icon,Cascader,Select,Row,Col,Checkbox,Button,AutoComplete} from 'antd';
import Style from './index.module.scss';
import {message} from 'antd'
const { Option } = Select;
const axios = require('axios');

class Register extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post('http://localhost:3005/animal/register0', {
                    username: values.username,
                    password: values.password,
                    age:values.age,
                    sex:values.sex,
                    phone:values.phone,
                    address:values.address
                }).then((res) => {

                    console.log(res.data);
                    // this.setState({
                    //   data:res.data
                    // })
                    if ( res.data == "isexit") {
                        alert("user is used!");

                    }else if(res.data=="success"){
                        message.success("注册成功");
                    }
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
                    {getFieldDecorator('age', {
                        rules: [{ required: true, message: 'Please input your age!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="age"
                            placeholder="age"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('sex', {
                        rules: [{ required: true, message: 'Please input your sex!' }],
                    })(
                        <Input
                            prefix={<Icon type="sex" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="sex"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input phone!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="phone"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('address', {
                        rules: [{ required: true, message: 'Please input address!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="address"
                        />,
                    )}
                </Form.Item>
                <Form.Item>         
                    <Button type="primary" htmlType="submit" className={Style.login_form_button} >
                        Register
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create({ name: 'normal_login' })(Register);