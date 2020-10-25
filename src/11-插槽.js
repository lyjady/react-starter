import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'

class Father extends React.Component {

  render() {
    return (
      <div>
        <SonComponent>
          <h1>11111111</h1>
          <h1>11111111</h1>
          <h1>11111111</h1>
          <h1>11111111</h1>
        </SonComponent>
      </div>
    )
  }
}

class SonComponent extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <Father />,
  document.querySelector('#root')
)
