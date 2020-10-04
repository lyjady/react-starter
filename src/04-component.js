import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'

// jsx中定义组件有两种方式
// 一种是函数式组件, 将定义的视图部分以方法返回值的方式返回, 若想要向组件进行传值那么直接在引用组件的地方将要传递的值以属性的方式定义即可
// 在函数式组件声明的地方定义一个prop形参来接受传递的值, 属性名就是标签名
function FuncComponent(prop) {
  console.log(prop)
  return (
    <div>这是一个函数是组件, {'长度: ' +  prop.length}</div>
  )
}

// 类组件, 声明的类继承React.Component, 在render方法内放回jsx视图部分
// 向类租金传值直接在注解内部调用this.prop.指定的属性名即可
// 组件中可以包含另一个组件, 还可以将由外部传入父组件的值层层传递到子组件中
class ClassComponent extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div>这是一个类组件, {'持久时间: ' + this.props.time}</div>
        <FuncComponent length="18cm" />
      </div>

    )
  }
}

// 二者没有本质的区别, 如果有很对交互事件, 改变数据定义方法那么就是用类组件.如果单单就显示一个简单的视图展示数据没有交互事件那么就是用函数组件

ReactDOM.render(
  <ClassComponent time="40 minute"/>,
  document.getElementById('root')
);
