import React, { Component } from 'react';
import { Input, Menu, Icon, Avatar } from 'antd';
import '../css/header.css'
const { Search } = Input
let src = " "
class header extends Component {
    render() {
        return (
            <div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    className="header_menu"
                >
                    <Menu.Item key={0}><span> Logo </span></Menu.Item>
                    <Menu.Item key={1}><Search placeholder="search.." onSearch={value => console.log(value)} enterButton className="header_search" />
                    </Menu.Item>
                    <Menu.Item className="header_menuitem">
                        <Avatar src={src} alt="Avatar" />
                    </Menu.Item>
                    <Menu.Item
                        className="header_menuitem"
                    >
                        <a href="#">
                            <Icon
                                type="notification"
                                className="header_icon"

                            />
                        </a>
                    </Menu.Item>
                    <Menu.Item className="header_menuitem">
                        <a href="#">
                            <Icon
                                type="message"
                                className="header_icon"
                            />
                        </a>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}


export default header;