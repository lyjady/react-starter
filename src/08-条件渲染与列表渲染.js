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
  clickTitle = title => {
    alert(title)
  }
  render() {
    const heroes = ['泽拉图', '阿塔尼斯', '塔萨达', '菲尼克斯']
    const article = [
      {
        title: '标题1',
        content: '内容1'
      },
      {
        title: '标题2',
        content: '内容2'
      },
      {
        title: '标题3',
        content: '内容3'
      },
      {
        title: '标题4',
        content: '内容4'
      },
      {
        title: '标题5',
        content: '内容5'
      },
      {
        title: '标题6',
        content: '内容6'
      }
    ]
    return(
      <div>
        {this.state.isAttack ? <h1>进攻, 夺回艾尔</h1> : <h1>撤退, 必须重新集结部队</h1>}
        <button onClick={() => {this.setState({isAttack: !this.state.isAttack})}}>改变</button>
        <ul>
          {heroes.map((hero, index) => <li key={index}>{hero}</li>)}
        </ul>
        <hr/>
        <ul>
          {
            article.map((article, index) => {
              return (
                <li key={index}>
                  <h3 onClick={() => this.clickTitle(article.title)}>{article.title}</h3>
                  <span>{article.content}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <RenderComponent />,
  document.querySelector('#root')
)
