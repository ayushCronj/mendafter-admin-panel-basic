import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import '../css/sidemenu.css'

const { SubMenu } = Menu;

class sidemenu extends Component {
    render() {
        return (
            <div >
                <Menu theme="dark">
                    <Menu.Item key={0} className="sidemenu_menuitem"><span> <Icon type="home" /> Dashboard </span></Menu.Item>
                    {/* <Menu.Item key={1} className="sidemenu_menuitem"> <span> Products</span> </Menu.Item>
                </Menu>
                <Menu
                    theme="dark"
                    onClick={this.handleClick}
                    defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['2']}
                    mode="inline"
                >
                    <SubMenu
                        key={2}
                        title={
                            <span>
                                Categories
                            </span>
                        }
                    >
                        <Menu.Item key="10" className="sidemenu_menuitem">Category 1</Menu.Item>
                        <Menu.Item key="11" className="sidemenu_menuitem">Category 2</Menu.Item>
                        <Menu.Item key="12" className="sidemenu_menuitem">Category 3</Menu.Item>
                        <Menu.Item key="13" className="sidemenu_menuitem">Category 4</Menu.Item>
                    </SubMenu>
                </Menu>
                <Menu theme="dark">
                    <SubMenu
                        key={3}
                        title={
                            <span>
                                Brands
                            </span>
                        }
                    >
                        <Menu.Item key="10" className="sidemenu_menuitem">Brand 1</Menu.Item>
                        <Menu.Item key="11" className="sidemenu_menuitem">Brand 2</Menu.Item>
                        <Menu.Item key="12" className="sidemenu_menuitem">Brand 3</Menu.Item>
                        <Menu.Item key="13" className="sidemenu_menuitem">Brand 4</Menu.Item>
                    </SubMenu>
                    <Menu.Item key={4} className="sidemenu_menuitem"><span> <Icon type="user" />Customers </span></Menu.Item>
                    <Menu.Item key={5} className="sidemenu_menuitem"><span>  Orders </span></Menu.Item>
                    <Menu.Item key={6} className="sidemenu_menuitem"><span> Payments </span></Menu.Item>
                    <Menu.Item key={7} className="sidemenu_menuitem"><span> Blogs </span></Menu.Item>
                    <Menu.Item key={8} className="sidemenu_menuitem"><span> <Icon type="book" />Journals </span></Menu.Item>
                    <Menu.Item key={9} className="sidemenu_menuitem"><span> <Icon type="unordered-list" />Guided List </span></Menu.Item> */}

                </Menu>
            </div >
        )
    }
}


export default sidemenu;