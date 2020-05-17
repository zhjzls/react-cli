import React, { Suspense } from 'react';
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
import { spreadArray } from '@utils/utils.js'
const Test = React.lazy(() => import('@/pages/System/Setting'))
const flattenRoutes = (array) => {
    return array.reduce((init, cur) => init.concat(Array.isArray(cur.children) ? flattenRoutes(cur.children) : cur), [])
}

function getRouteContent(routes) {
    console.log(606, flattenRoutes(routes))
    const tmpArr = flattenRoutes(routes);
    tmpArr.map(item =>{
        console.log(14, item)
    })
    return flattenRoutes(routes).map((item, index) => {
        // console.log(13, item.component)
        const LazyComponent = item.component
        return  <Route key={index} path={item.path}>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
                <LazyComponent />
            {/* </Suspense> */}
            <h1>测试内容</h1>
        </Route>
    })
}
export default function LayoutContent({ routes }) {
    console.log(23, getRouteContent(routes))
    return <Layout.Content
        className="site-layout-background"
        style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
        }}
    >
        <h1>child1</h1>
        <h2>child2</h2>
        <Switch>
            {getRouteContent(routes)}
        </Switch>


    </Layout.Content>
}