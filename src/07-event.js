import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'

// React的事件与原生的JavaScript事件类似, 是不过React要以驼峰命名的方法来声明事件
// 不像Vue, 阻止默认行为与冒泡斗鱼原生的JavaScript一样
class ClickComponent extends React.Component {
  render() {
    return(
      <div>
        <button onClick={e => console.log(e.clientX)}>点击</button>
        <br/>
        {/* e.preventDefault()阻止默认行为 */}
        <a onClick={e => e.preventDefault()} href={'https://www.baidu.com'}>百度一下</a>
        {/* e.stopPropagation()阻止事件冒泡 */}
        <div onClick={() => alert('father div')} className={'faDiv'}>
          <div onClick={e => {
            alert('sub div')
            e.stopPropagation()
          }} className={'subDiv'}/>
        </div>
        <input type={'text'} onBlur={() => console.log('失去焦点')} value={'直道相思了无益，未妨惆怅是清狂'} onChange={e => console.log(e)}/>
      </div>
    )
  }
}

ReactDOM.render(
  <ClickComponent />,
  document.querySelector('#root')
)
