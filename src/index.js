import React from 'react';
import ReactDOM from 'react-dom';
import './style/bootstrap.css'
import 'antd/dist/antd.css'
import {Provider} from 'react-redux'
import {store} from './utils/redux/store'
import CommentApp from './containers/CommentApp';

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.querySelector('#root')
)
