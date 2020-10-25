import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: ['吃饭', '睡觉', '玩游戏', '打代码']
    }
  }

  addTodo = item => {
    const {todos} = this.state
    todos.push(item)
    this.setState({todos})
  }

  render() {
    return (
      <div style={{padding: '20px'}}>
        <h1>Simple Todo List</h1>
        <AddComponent count={this.state.todos.length} addTodo={this.addTodo} />
        <ListComponent todos={this.state.todos} />
      </div>
    )
  }
}

class AddComponent extends React.Component {

  addToTodo = () => {
    this.props.addTodo(this.todoInput.value)
    this.todoInput.value = ''
  }

  render() {
    return (
      <div style={{marginBottom: '20px'}}>
        <input style={{marginRight: '10px'}} type={'text'} ref={input => this.todoInput = input}/>
        <button onClick={this.addToTodo}>Add #{this.props.count + 1}</button>
      </div>
    )
  }
}

class ListComponent extends React.Component {
  render() {
    return (
      <ul style={{margin: '0px', padding: '0px'}}>
        {this.props.todos.map((item, index) => <li key={index}>{`${index + 1}.${item}`}</li>)}
      </ul>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
