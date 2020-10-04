import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let status = 2
// jsx表达式在{}里面编写, 表达式内可以写html标签
let element = (
  <div>
    {status === 1 ? <button>我自横刀向天笑</button> : <button>去留肝胆两昆仑</button>}
  </div>
)

let element2 = (
  <button>我自横刀向天笑</button>
)

let element3 = (
  <button>去留肝胆两昆仑</button>
)

// 表达式内除了可以html元素之外还能使用定义的jsx组件
let element4 = (
  <div>
    {status === 1 ? element2 : element3}
  </div>
)

ReactDOM.render(
  element4,
  document.getElementById('root')
);
