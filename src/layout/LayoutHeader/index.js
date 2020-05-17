import React from 'react';
import { Layout } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import './index.less'
export default function LayoutHeader({ collapsed, toggleSide}) {
    return <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => { toggleSide(!collapsed)},
        })}
    </Layout.Header>
}