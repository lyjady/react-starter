import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// function run() {
//   const element = (
//     <div>
//       <h1>现在的时间是: {new Date().toLocaleTimeString()}</h1>
//       <span>React组件</span>
//     </div>
//   )
//   ReactDOM.render(element, document.querySelector('#root'))
// }
//
// function Clock(prop) {
//   return (
//     <div>
//       <h1>现在的时间是: {prop.date.toLocaleTimeString()}</h1>
//       <span>React组件的另一种方式</span>
//     </div>
//   )
// }
//
// function run2() {
//   ReactDOM.render(<Clock date={new Date()} />, document.querySelector('#root'))
// }

// setInterval(run2, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
