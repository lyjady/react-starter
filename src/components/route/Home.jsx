import React from "react";
import New from "./New";
import Message from "./Message";
import {NavLink, Switch, Route, Redirect} from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>This is Home Component</h3>
        <div style={{marginBottom: '20px'}}>
          <ul className='nav nav-tabs'>
            {/* 声明路由嵌套的NavLink */}
            <li>
              <NavLink to={'/home/news'}>New</NavLink>
            </li>
            <li>
              <NavLink to={'/home/message'}>Message</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          {/* 在被嵌套路由的父组件内声明路由路径与组件之间的对应关系 */}
          <Route path={'/home/news'} component={New}/>
          <Route path={'/home/message'} component={Message}/>
          <Redirect from={'/home'} to={'/home/news'} />
        </Switch>
      </div>
    )
  }
}
