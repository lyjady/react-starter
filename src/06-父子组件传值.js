import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'

// 父子组件传值
// 父组件向子组件传值, 直接在以子组件属性的形式来声明, 子组件内用prop来使用
// 子组件向父组件传值和vue一样, 子组件调用父组件的方法向要传递的值作为方法参数, 父组件向子组件传递方法和传值的写法一样
class ChildComponent extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    return (
      <div>
        <h1>{'父组件来的数据: ' + this.props.fatherData}</h1>
        <button onClick={() => this.props.setFatherData('修改之后的父组件数据')}>修改父组件的数据</button>
      </div>
    )
  }
}

class FatherComponent extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      fatherData: '父组件的数据'
    }
  }

  render() {
    return (
      <ChildComponent fatherData={this.state.fatherData} setFatherData={this.setFatherData} />
    )
  }

  setFatherData = (data) => {
    this.setState({
      fatherData: data
    })
  }
}

ReactDOM.render(
  <FatherComponent />,
  document.querySelector('#root')
)
