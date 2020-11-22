import React from 'react';
import CommentAdd from '../comment/add/CommentAdd';
import CommentList from '../comment/list/CommentList';
import '../../index.css';
import '../../style/style.css'

export default class CommentComponent extends React.Component {

  pushComment = (name, comment) => {
    this.props.pushComment({name, comment})
  }

  deleteComment = index => {
    this.props.deleteComment(index)
  }

  componentDidMount() {
    const initComment = [
      {name: '林肯', comment: '民有,民治,民享'},
      {name: '罗斯福', comment: '言论自由, 信仰自由, 免于匮乏的自由, 免于恐惧的自由'}
    ]
    this.props.pushCommentAsync(initComment)
  }

  render() {
    const {comments} = this.props
    return (
      <div>
        <header>
          <h1 className={'title'}>请开始你的表演</h1>
        </header>
        <div className={'main'}>
          <CommentAdd pushComment={this.pushComment} />
          <CommentList comments={comments} deleteComment={this.deleteComment} />
        </div>
      </div>
    )
  }
}
