import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'
import PropTypes from 'prop-types'

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
        <h5>{this.props.name}</h5>
        <h5>{this.props.age}</h5>
        <h5>{this.props.gender}</h5>
        <button onClick={() => this.props.setFatherData('修改之后的父组件数据')}>修改父组件的数据</button>
      </div>
    )
  }
}

// 设置组件中props属性的默认值, 当父组件没有将制定的值传入子组件的时候就是用defaultProps的默认值
ChildComponent.defaultProps = {
  name: 'Rose'
}

// 设置组件中的props属性的类型与是否必须, 如果类型不一致或者缺少必须值会报错
ChildComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired
}

class FatherComponent extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      fatherData: '父组件的数据',
      person: {
        name: 'Jack',
        age: 20,
        gender: 'man'
      }
    }
  }

  render() {
    const {name, age, gender} = this.state.person
    return (
      <ChildComponent
        fatherData={this.state.fatherData}
        name={name}
        age={age}
        gender={gender}
        setFatherData={this.setFatherData}
      />
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
