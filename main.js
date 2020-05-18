import React from 'react';
import ReactDOM from 'react-dom'
import Main from '@/index'
// import 'antd/dist/antd.less'
import './app.less'
import BaseLayout from './src/layout/BaseLayout'
if(module.hot) {
    module.hot.accept('./src/layout/BaseLayout', function() {
        ReactDOM.render(<Main />, document.getElementById('root'))
    })
}
ReactDOM.render(<Main />, document.getElementById('root'))