import React, { useState } from 'react';
import { Layout } from 'antd'
import { BrowserRouter as Router, HashRouter, Switch } from 'react-router-dom'
import SideMenu from '@/layout/Sidemenu'
import LayoutHeader from '@/layout/LayoutHeader'
import LayoutContent from '@/layout/LayoutContent'
import routeConfig from '@/route/routes'
import './index.less'

function BaseLayout({routeConfig}) {
    console.log(11111,routeConfig)
    const [collapsed, toggleCollapsed] = useState(false)
    return <Router>
    <Layout className="basic-layout">
        <SideMenu collapsed={collapsed} routes={routeConfig}></SideMenu>
        <Layout>
            {/* <Switch> */}
            <LayoutHeader collapsed={collapsed} toggleSide={toggleCollapsed}></LayoutHeader>
            <LayoutContent routes={routeConfig} />
            {/* </Switch> */}
        </Layout>
    </Layout></Router>

}
export default BaseLayout