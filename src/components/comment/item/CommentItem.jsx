import React from "react";
import './index.css'

export default class CommentItem extends React.Component {

  deleteComment = index => {
    console.log(index);
    this.props.deleteComment(index)
  }

  render() {
    return (
      <ul>
        {this.props.comments.map((item, index) => {
          return (
            <li key={index}>
              <div>{item.name}：</div>
              <span>{item.comment}</span>
              <span onClick={() => this.deleteComment(index)}>删除</span>
            </li>
          )
        })}
      </ul>
    )
  }
}
