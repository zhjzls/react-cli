import React from 'react';
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

function getMenu(routes) {
    return routes.map(route => {
        if (route.children) {
            return <Menu.SubMenu key={route.path} icon={route.icon} title={route.name}>
                {getMenu(route.children)}
            </Menu.SubMenu>
        }
        return <Menu.Item key={route.path} icon={route.icon}>
            <Link to={route.path}><span style={{ color: "#fff" }}>{route.name}</span></Link>
        </Menu.Item>
    })
}

export default function SideMenu({ collapsed, routes }) {
    return <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['welcome']}>
            
            {getMenu(routes)}
            {/* <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
            </Menu.Item> */}
        </Menu>
    </Layout.Sider>
}