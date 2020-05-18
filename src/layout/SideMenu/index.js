import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
const getMenu = (routes) => {
    return routes.map(route => {
        if(!route.layout) return null
        if (route.children) {
            return <Menu.SubMenu key={route.path} icon={route.icon} title={route.name}>
                {getMenu(route.children)}
            </Menu.SubMenu>
        }
        return !route.redirect ? <Menu.Item key={route.path} icon={route.icon}>
            <Link to={route.path}><span style={{ color: "#fff" }}>{route.name}</span></Link>
        </Menu.Item> : null
    })
}

export default function SideMenu({ collapsed, routes }) {
    const [openKeys, setOpenKeys] = useState([])
    const [selectedKeys, setSelectedKeys] = useState([])
    
    // 获取当前path
    const location = useLocation()
    console.log(21, location.pathname)
    const paths = location.pathname.split('/')
    const openKey = `/${paths[1]}`
    useEffect(() =>{
        setSelectedKeys([location.pathname])
        setOpenKeys([openKey])
    }, [location.pathname])
    return <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark"
            onOpenChange={(openKeys) => {
                console.log("openKeys", openKeys)
                setOpenKeys(openKeys)
            }}
            onClick={({ item, key, keyPath, domEvent }) => {
                console.log("{ item, key, keyPath, domEvent }", item, key, keyPath, domEvent)
            }} 
            onSelect={({ item, key, keyPath, selectedKeys, domEvent })=>{
                setSelectedKeys(selectedKeys)
            }}
            mode="inline" 
            openKeys={openKeys}
            selectedKeys={selectedKeys} >
            {getMenu(routes)}
        </Menu>
    </Layout.Sider>
}