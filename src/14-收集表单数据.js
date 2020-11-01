import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pwd: ''
    }
  }

  handleChange = e => {
    const pwd = e.target.value
    this.setState({pwd})
  }

  commit = e => {
    const {name, pwd} = this.state
    alert(`姓名:${this.nameInput.value}, 密码:${pwd}`)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.commit}>
        {/* 非受控组件, 需要时手动的去读取表单输入框的数据, 操作Dom不推荐 */}
        姓名:<input type="text" ref={input => this.nameInput = input}/>
        <br/>
        {/* 受控组件, 数据发生变化自动去收集数据更新state, 但是需要开发者自己去编写逻辑实现, 不直接操作Dom推荐 */}
        密码:<input type="password" onChange={this.handleChange}/>
        <br/>
        <button type="submit">提交</button>
      </form>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
