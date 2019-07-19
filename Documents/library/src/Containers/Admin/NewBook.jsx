import React, { Component } from 'react'
import {Form,Input,Tooltip,Icon,Cascader,Select,Row,Col,Checkbox,Button,AutoComplete} from 'antd';
import Style from './index.module.scss';
import {message} from 'antd'
const { Option } = Select;
const axios = require('axios');

class NewBook extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post('http://localhost:3005/animal/newbook', {
                    b_id:b_id,
                    bookname:bookname,
                    author:author,
                    publish:publish,
                    publishtime:publishtime,
                    pushtime:pushtime,
                    booktype:booktype,
                    count:count
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
                    {getFieldDecorator('b_id', {
                        rules: [{ required: true, message: 'Please input b_id!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="b_id"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('bookname', {
                        rules: [{ required: true, message: 'Please input bookname!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="bookname"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('author', {
                        rules: [{ required: true, message: 'Please input author!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            
                            placeholder="author"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('publish', {
                        rules: [{ required: true, message: 'Please input publish' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="age"
                            placeholder="publish"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('publishtime', {
                        rules: [{ required: true, message: 'Please input publishtime!' }],
                    })(
                        <Input
                            prefix={<Icon type="sex" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="publishtime"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('pushtime', {
                        rules: [{ required: true, message: 'Please input pushtime!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="pushtime"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('booktype', {
                        rules: [{ required: true, message: 'Please input booktype!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="booktype"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('count', {
                        rules: [{ required: true, message: 'Please input count!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="count"
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

export default Form.create({ name: 'normal_login' })(NewBook);