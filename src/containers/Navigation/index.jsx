import React, { Component } from "react";
import { Menu, Icon } from 'antd';
import { Link } from "react-router";
import "./index.less";

export default class Navigation extends Component {
    state = {
        current: "home"
    }
    handleClick = (e) => {
        this.setState({ current: e.key });
    }
    render() {
        return (
            <div className="navigation">
                <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
                    <Menu.Item key="home">
                        <Link to="/"> <Icon type="appstore" />Home </Link>
                    </Menu.Item>
                    <Menu.Item key="test">
                        <Link to="/test"><Icon type="appstore" />Test</Link>
                    </Menu.Item>
                    <Menu.Item key="404">
                        <Link to="/notfind"><Icon type="appstore" />404</Link>
                    </Menu.Item>
                </Menu>
                <div className="children">
                    { this.props.children }
                </div>
            </div>
        )
    }
}