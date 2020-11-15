import React from "react";
import {Button, List} from "antd";
import {NavLink, Route} from "react-router-dom";
import MessageDetail from "./MessageDetail";

export default class Message extends React.Component {

  state = {
    messages: []
  }

  componentDidMount() {
    setTimeout(() => {
      const messages = [
        {id: 1, message: 'message001'},
        {id: 2, message: 'message002'},
        {id: 3, message: 'message003'},
        {id: 4, message: 'message004'},
      ]
      this.setState({messages})
    }, 1000)
  }

  push = id => {
    // 编程式路由跳转, push会将新的页面压入栈中, 后退可以回到之前的页面
    this.props.history.push(`/home/message/detail/${id}`)
  }

  replace = id => {
    // replace会将新的页面替换栈顶的页面, 当页面跳转之后后退是无法回到之前的页面上的
    this.props.history.replace(`/home/message/detail/${id}`)
  }

  back = () => {
    // 页面回退
    this.props.history.goBack()
  }

  forward = () => {
    // 页面前进
    this.props.history.goForward()
  }

  render() {
    return (
      <div>
        <List
          size={'small'}
          dataSource={this.state.messages}
          renderItem={item => {
            return (
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
                {/* 传递的参数 */}
                <NavLink to={`/home/message/detail/${item.id}`}>
                  <List.Item>{item.id} - {item.message} </List.Item>
                </NavLink>
                <div>
                  <Button type={'primary'} shape={'round'} onClick={() => this.push(item.id)}>Push</Button>
                  <Button style={{marginLeft: '10px'}} shape={'round'} onClick={() => this.replace(item.id)}>Replace</Button>
                </div>
              </div>
            )
          }}
        />
        <div style={{marginBottom: '20px'}}>
          <Button type={'primary'} shape={'round'} onClick={this.back}>Back</Button>
          <Button style={{marginLeft: '10px'}} shape={'round'} onClick={this.forward}>Forward</Button>
        </div>
        {/* 通过路由传递参数, :id声明参数的位置与参数的名称 */}
        <Route path={'/home/message/detail/:id'} component={MessageDetail}/>
      </div>
    )
  }
}
