import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, NavLink, Switch, Route, Redirect} from "react-router-dom";
import './style/bootstrap.css'

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
              <NavLink className="list-group-item" to='/about'>About</NavLink>
              <NavLink className="list-group-item" to='/home'>Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 可切换的路由组件, 类似于Vue的router-view, Switch表示标签内的组件只会显示一个 */}
                <Switch>
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
                  <Redirect to='/home'/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>This is Home Component</h3>
      </div>
    )
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h3>This is About Component</h3>
      </div>
    )
  }
}

ReactDOM.render(
  (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  ),
  document.querySelector('#root')
)
