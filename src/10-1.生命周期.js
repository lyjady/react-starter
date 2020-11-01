import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'

// React的声明周期分为三个
// Mounting: 将Dom元素挂载到页面上
// Updating: 对Dom元素进行更新
// Unmounting: 将Dom元素移除

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '我是你爸爸'
    }
    console.log('执行构造方法')
  }

  /**
   * 组件更新之前的钩子方法, 如果返回true那么才会去执行willUpdate和didUpdate方法, 更新里面的数据
   * 返回false就不会执行方法更新数据
   * @param nextProps 更新之后的props对象
   * @param nextState 更新之后的state对象
   * @param nextContext
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('------是否应该更新Dom-------')
    console.log(nextProps)
    console.log(nextState)
    console.log(nextContext)
    console.log('------是否应该更新Dom-------')
    return true
  }

  /**
   * 组件挂载完成之后的钩子方法
   */
  componentDidMount() {
    console.log('组件挂载完成')
  }

  /**
   * 组件更新之后的钩子方法
   * @param prevProps 更新前的props对象
   * @param prevState 更新前的state对象
   * @param snapshot 我也不知道这是什么
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('------更新Dom------')
    console.log(prevProps)
    console.log(prevState)
    console.log(snapshot)
    console.log('------更新Dom------')
  }

  /**
   * 组件卸载时候的钩子方法
   */
  componentWillUnmount() {
    console.log('Dom卸载')
  }

  /**
   * 组件发生异常的钩子方法
   * @param error
   * @param errorInfo
   */
  componentDidCatch(error, errorInfo) {
    console.log('捕获Dom异常')
    console.log(error)
    console.log(errorInfo)
  }

  changeDomData = () => {
    this.setState({
      data: '叫爸爸'
    })
  }

  render() {
    console.log('渲染页面')
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={this.changeDomData}>爸爸???</button>
      </div>
    )
  }
}

ReactDOM.render(
  <LifeCycle msg={'HelloWorld'}/>,
  document.querySelector('#root')
)
