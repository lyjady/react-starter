import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'

// jsx中定义样式的方式与vue中类似, 定义一个样式对象, 直接在jsx组件中使用这个对象即可
// 如果样式名称由多个单词组成则要按照驼峰命名法, 若不想用驼峰写法则将样式名用引号包裹写成字符串即可
let style = {
  'backgroundColor': 'skyblue',
  'fontSize': '32px',
  'border': '1px solid red'
}

// jsx还可使用类名来指定样式,使用className属性来使用指定的类名。但是className属性不允许重复, 无法一次性指定多个
// 只能在变量内声明多个类名
let className1 = 'article article-font'
let className2 = 'article-font'

let element = (
  <div className={className1}>文章, 经国之大业, 不朽之盛事</div>
)

ReactDOM.render(
  element,
  document.getElementById('root')
);
