import React from 'react';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
} from '@ant-design/icons';


const routes = [
    {
        name: "欢迎页",
        path: '/welcome',
        icon: <HomeOutlined />,
        component: React.lazy(() => import('@/pages/Welcome'))
    },
    {
        name: "主页",
        path: '/home',
        icon: <SettingFilled />,
        component: React.lazy(() => import('@/pages/Home'))
    },
    {
        name: "系统管理",
        path: '/system',
        icon: <SyncOutlined />,
        redirect: "/system/setting",
        children: [
            {
                name: "用户配置",
                path: "/system/setting",
                icon: <SettingFilled />,
                component: React.lazy(() => import('@/pages/System/Setting'))
            },
            {
                name: "个人中心",
                path: "/system/user",
                icon: <SmileOutlined />,
                component: React.lazy(() => import('@/pages/System/User'))
            },
        ]
    }
]

export default routes