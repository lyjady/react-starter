import React from 'react';
import {Button, Select} from "antd";

export default class CounterComponent extends React.Component {

  state = {
    value: 1
}

  increment = () => {
    console.log(this.state)
    this.props.increment(this.state.value)
  }

  decrement = () => {
    this.props.decrement(this.state.value)
  }

  incrementIfOdd = () => {
    let count = this.props.count
    if (count % 2 !== 0) this.increment()
  }

  incrementAsync = () => {
    this.props.incrementAsync(this.state.value)
  }

  change = value => this.setState({value})

  render() {
    const {Option} = Select
    const count = this.props.count
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
