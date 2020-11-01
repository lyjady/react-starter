import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'


/**
 * React生命周期流程
 * 1.第一次初始化渲染: ReactDom.render()
 *    a.constructor: 构造方法, 创建对象初始化state
 *    b.componentWillMount: 组件即将挂载时的生命周期回调(现已废弃)
 *    c.render: 渲染页面
 *    d.componentDidMount: 组件挂载完成的生命周期回调
 * 2.组件状态更新: this.setState({})
 *    a.componentWillUpdate: 状态即将更新时的生命周期回调函数
 *    b.render: 渲染页面
 *    c.componentDidUpdate: 状态更新完成的生命周期回调函数
 * 3.移除组件: React.unmountComponentAtNode
 *    a.componentWillUnmount: 组件即将卸载的生命周期回调函数
 */
class App extends React.Component {

  state = {
    opacity: 1
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('call interval')
      let {opacity} = this.state
      opacity -= 0.1
      this.setState({opacity})
      if (opacity <= 0) {
        opacity = 1
        this.setState({opacity})
      }
    }, 100)
  }

  stop = () => {
    // 卸载组件, 但是没有停止定时器
    ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
  }

  componentWillUnmount() {
    // 停止定时器
    clearInterval(this.timer)
  }

  render() {
    const {opacity} = this.state
    return (
      <div>
        <h2 style={{opacity}}>天若有情天亦老，月若无恨月长圆</h2>
        <button onClick={this.stop}>Stop</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
