import React from "react";
import './index.css'
import CommentItem from '../item/CommentItem'

export default class CommentList extends React.Component {

  render() {
    return (
      <div className={'show-comment'}>
        <h1>{this.props.comments.length === 0 ? '暂无评论，快来发布吧' : '评论回复'}</h1>
        <CommentItem comments={this.props.comments} deleteComment={this.props.deleteComment} />
      </div>
    )
  }
}
