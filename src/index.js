import React from 'react';
import ReactDOM from 'react-dom';
import './style/bootstrap.css'
import 'antd/dist/antd.css'
import {Button, Select} from "antd";
import {createStore} from "redux";
import {counter} from './utils/redux/reducers'
import {INCREMENT, DECREMENT} from './utils/redux/action_type'

class App extends React.Component {

  state = {
    value: 1
  }

  increment = () => {
    const {value} = this.state
    store.dispatch({type: INCREMENT, data: value})
  }

  decrement = () => {
    const {value} = this.state
    store.dispatch({type: INCREMENT, data: value})
  }

  incrementIfOdd = () => {
    let count = store.getState()
    if (count % 2 !== 0) this.increment()
  }

  incrementAsync = () => {
    setTimeout(() => this.increment(), 1000)
  }

  change = value => this.setState({value})

  render() {
    const {Option} = Select
    const count = store.getState()
    return (
      <div style={{padding: 15}}>
        <p>Click {count} times</p>
        <Select defaultValue={1} style={{width: 150}} onChange={value => this.change(value)}>
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
          <Option value={3}>3</Option>
        </Select>&nbsp;&nbsp;
        <Button shape={'round'} size={'small'} onClick={this.increment}>+</Button>&nbsp;&nbsp;
        <Button shape={'round'} size={'small'} onClick={this.decrement}>-</Button>&nbsp;&nbsp;
        <Button shape={'round'} size={'small'} onClick={this.incrementIfOdd}>increment if odd</Button>&nbsp;&nbsp;
        <Button shape={'round'} size={'small'} onClick={this.incrementAsync}>increment async</Button>&nbsp;&nbsp;
      </div>
    )
  }
}

// redux类似以vuex是全部组件的数据仓库
// 创建store对象
const store = createStore(counter)

ReactDOM.render(
  <App store={store}/>,
  document.querySelector('#root')
)

store.subscribe(() => {
  ReactDOM.render(
    <App store={store}/>,
    document.querySelector('#root')
  )
})
