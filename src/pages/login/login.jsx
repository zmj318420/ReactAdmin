/*登录组件*/

import React, { Component } from 'react'
import './login.less'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



export default class Login extends Component {
    handleSubmit = (event) => {
        message.error("提交")
    }
    onFinish = values => {
        console.log('Received values of form: ', values);
    };
    render() {
        return (
            <div className="login">
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form className="login-form" onFinish={this.onFinish}>
                        <Form.Item name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '用户名不能为空',
                                },
                                {
                                    min:6,
                                    message:"用户名不能少于六位"
                                }
                            ]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '密码必须输入',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}