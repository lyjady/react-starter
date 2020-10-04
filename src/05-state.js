import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'

// state相当于vue的data, 放置组件需要的数据
class ClassComponent extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }
  // 由于React不是双向绑定的直接修改state里面的数据页面是不会生效的, 需要使用setState方法修改让页面生效
  componentDidMount() {
    setInterval(() => this.setState({time: new Date().toLocaleTimeString}), 1000)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div>这是一个类组件, {this.state.time}</div>
      </div>
    )
  }
}

class StateComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      content: 1,
      buttonStyle: {
        'backgroundColor': 'skyblue',
        'width': '64px',
        'height': '32px',
        'display': 'block',
        'lineHeight': '32px',
        'textAlign': 'center',
        'borderRadius': '10px'
      }
    }
  }

  // 由于React不是双向绑定的直接修改state里面的数据页面是不会生效的, 需要使用setState方法修改让页面生效
  clickEvent = e => {
    this.setState({
      content: this.state.content + 1
    })
  }

  render() {
    return (
      <div>
        <span onClick={this.clickEvent} style={this.state.buttonStyle}>{this.state.content}</span>
      </div>
    )
  }
}

ReactDOM.render(
  <StateComponent />,
  document.getElementById('root')
);
