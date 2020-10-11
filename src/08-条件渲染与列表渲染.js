import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'

// React的条件渲染与列表渲染不同于Vue, Vue有v-for与v-if或者v-show但是React需要使用原生的JavaScript来实现

class RenderComponent extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      isAttack: true
    }
  }
  render() {
    const heroes = ['泽拉图', '阿塔尼斯', '塔萨达', '菲尼克斯']
    heroes.forEach(hero => {

    })
    return(
      <div>
        {this.state.isAttack ? <h1>进攻, 夺回艾尔</h1> : <h1>撤退, 必须重新集结部队</h1>}
        <button onClick={() => {this.setState({isAttack: !this.state.isAttack})}}>改变</button>
        <ul>
          {heroes.map((hero, index) => <li key={index}>{hero}</li>)}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <RenderComponent />,
  document.querySelector('#root')
)
