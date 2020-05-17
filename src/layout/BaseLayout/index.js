import React, { useState } from 'react';
import { Layout } from 'antd'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import SideMenu from '@/layout/Sidemenu'
import LayoutHeader from '@/layout/LayoutHeader'
import LayoutContent from '@/layout/LayoutContent'
import routeConfig from '@/route/routes'
function BaseLayout() {
    const [collapsed, toggleCollapsed] = useState(false)
    return <Layout>
        <Router>
            <SideMenu collapsed={collapsed} routes={routeConfig}></SideMenu>
            <Layout>
                {/* <Switch> */}
                    <LayoutHeader collapsed={collapsed} toggleSide={toggleCollapsed}></LayoutHeader>
                    <LayoutContent routes={routeConfig}>
                        <h1>child1</h1>
                        <h2>child2</h2>
                    </LayoutContent>
                {/* </Switch> */}
            </Layout>
        </Router>

    </Layout>
}
export default BaseLayout