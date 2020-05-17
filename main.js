import React from 'react';
import ReactDOM from 'react-dom'

// import 'antd/dist/antd.less'
import './app.less'
import BaseLayout from './src/layout/BaseLayout'
if(module.hot) {
    module.hot.accept('./src/layout/BaseLayout', function() {
        ReactDOM.render(<BaseLayout />, document.getElementById('root'))
    })
}
ReactDOM.render(<BaseLayout />, document.getElementById('root'))