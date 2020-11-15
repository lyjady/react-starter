import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink, Switch, Route, Redirect, HashRouter} from "react-router-dom";
import Home from './components/route/Home'
import About from './components/route/About'
import './style/bootstrap.css'
import 'antd/dist/antd.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 导航路由链接, 类似于Vue的router-link */}
              {/* activeClassName设置激活时应用的类名 */}
              <NavLink className="list-group-item" activeClassName={'active'} to='/about'>About</NavLink>
              <NavLink className="list-group-item" activeClassName={'active'} to='/home'>Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 可切换的路由组件, 类似于Vue的router-view, Switch表示标签内的组件只会显示一个 */}
                <Switch>
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
                  <Redirect from={'/'} to='/about'/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  (
    <HashRouter>
      <App/>
    </HashRouter>
  ),
  document.querySelector('#root')
)
