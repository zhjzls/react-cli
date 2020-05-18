import React from 'react';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
} from '@ant-design/icons';
import BaseLayout from '@/layout/BaseLayout'

const routes = [
    // {
    //     path: '/',
    //     redirect: '/welcome',
    //     layout: <BaseLayout />,
    // },
    {
        path: '/login',
        // layout: <BaseLayout />,
        exact: true,
        name: '登录',
        component: () => <h1>先登录吧</h1>
    },
    {

        path: '/login',
        // layout: <BaseLayout />,
        exact: true,
        name: '登录',
        component: () => <h1>先登录吧</h1>
    },
    {
        path: '/',
        component: BaseLayout,
        children: [
            {
                name: "欢迎页",
                path: '/welcome',
                icon: <HomeOutlined />,
                layout: <BaseLayout />,
                component: React.lazy(() => import('@/pages/Welcome'))
            },
            {
                name: "主页",
                path: '/home',
                icon: <SettingFilled />,
                layout: <BaseLayout />,
                component: React.lazy(() => import('@/pages/Home'))
            },
            {
                name: "系统管理",
                path: '/system',
                icon: <SyncOutlined />,
                layout: <BaseLayout />,
                redirect: "/system/setting",
                children: [
                    {
                        name: "用户配置",
                        path: "/system/setting",
                        icon: <SettingFilled />,
                        layout: <BaseLayout />,
                        component: React.lazy(() => import('@/pages/System/Setting'))
                    },
                    {
                        name: "个人中心",
                        path: "/system/user",
                        icon: <SmileOutlined />,
                        layout: <BaseLayout />,
                        component: React.lazy(() => import('@/pages/System/User'))
                    },
                ]
            },
        ]
    }
]

export default routes