import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'
import CommentAdd from "./components/comment/add/CommentAdd";
import CommentList from "./components/comment/list/CommentList";


class App extends React.Component {

  state = {
    comments: []
  }

  pushComment = (name, comment) => {
    const {comments} = this.state
    comments.push({name, comment})
    this.setState({comments})
  }

  deleteComment = index => {
    const {comments} = this.state
    comments.splice(index, 1)
    this.setState({comments})
  }

  render() {
    return (
      <div>
        <header>
          <h1 className={'title'}>请开始你的表演</h1>
        </header>
        <div className={'main'}>
          <CommentAdd pushComment={this.pushComment} />
          <CommentList comments={this.state.comments} deleteComment={this.deleteComment} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
