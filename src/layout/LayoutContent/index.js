import React, { Suspense } from 'react';
import { Layout } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom'
import { spreadArray } from '@utils/utils.js'
const Test = React.lazy(() => import('@/pages/System/Setting'))
const flattenRoutes = (array) => {
    return array.reduce((init, cur) => init.concat(Array.isArray(cur.children) ? flattenRoutes(cur.children) : cur), [])
}

function getRouteContent(routes) {
    return flattenRoutes(routes).map((item, index) => {
        // if(item.redirect) {
        //     return <Redirect key={item.path} to={item.redirect}></Redirect>
        // }
        // if(!item.layout) return null
        console.log(item.component)
        return <Route key={item.path} path={item.path}>
            <Suspense fallback={<div>Loading...</div>}>
                <item.component />
            </Suspense>

        </Route>

        // return <Suspense fallback={<div>Loading...</div>}>
        //     <item.component />
        // </Suspense>
    })
}
export default function LayoutContent({ routes }) {
    return <Layout.Content
        className="site-layout-background"
        style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
        }}
    >
        <Switch>
            {getRouteContent(routes)}
        </Switch>
    </Layout.Content>
}