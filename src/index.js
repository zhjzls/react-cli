import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import routeConfig from '@/route/routes'
import BaseLayout from '@/layout/BaseLayout'
function Main() {
    console.log(455555, routeConfig)
    return <Router>
        <Switch>
            {routeConfig.map(item => {
                // return <BaseLayout key={item.path} routeConfig={routeConfig}></BaseLayout>
                if (item.component) {
                    console.log('true', item.component)
                }

                if (item.redirect) {
                    return <Redirect exact={true} key={item.path} to={item.redirect}><BaseLayout key={item.path} routeConfig={routeConfig}></BaseLayout></Redirect>
                }
                //    return  <Route key={item.path} path={item.path}>
                //         {item.component ?<Suspense fallback={<div>Loading...</div>}><item.component /></Suspense>: <h2>不是真实路由</h2>}
                //     </Route>
                if (!item.layout) {
                    return <Route exact={true} key={item.path} path={item.path}>
                        <h1>先登录吧</h1>
                    </Route>
                }
                return <Route exact={true} key={item.path} path={item.path}><BaseLayout key={item.path} routeConfig={routeConfig}></BaseLayout></Route>

            })}
        </Switch>
    </Router>
}
export default Main