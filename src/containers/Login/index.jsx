import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="login">
                <Form inline onSubmit={this.handleSubmit}>
                    <FormItem label="账户" >
                        <Input placeholder="请输入账户名" {...getFieldProps('userName')} />
                    </FormItem>
                    <FormItem label="密码" >
                        <Input type="password" placeholder="请输入密码" {...getFieldProps('password')} />
                    </FormItem>
                    <Button type="primary" htmlType="submit">登录</Button>
                </Form>
            </div>
        )
    }
}
export default Login = Form.create()(Login);
