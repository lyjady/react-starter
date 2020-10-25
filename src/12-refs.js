import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'

class App extends React.Component {

  // 与Vue一样是用refs的方法取到制定的Dom对象, 但是这样的方式在当前版本中已经废弃了
  handleClick = () => {
    let input = this.refs.input
    console.log(input);
    alert(input.value)
  }

  // <input type={'text'} ref={dom => this.dom = dom}/>使用箭头函数在页面渲染的时候将dom对象挂载到当前组件的this上
  handleClick2 = () => {
    console.log(this.dom);
    alert(this.dom.value)
  }

  handleBlur = e => {
    alert(e.target.value)
  }

  render() {
    return (
      <div>
        <input type={'text'} ref={'input'}/>
        <button onClick={this.handleClick}>确定</button>
        <br/>
        <input type={'text'} ref={dom => this.dom = dom}/>
        <button onClick={this.handleClick2}>确定</button>
        <input type={'text'} placeholder={'失去焦点是触发'} onBlur={this.handleBlur}/>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
