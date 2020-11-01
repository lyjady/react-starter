import React from "react";
import './index.css'

export default class CommentAdd extends React.Component {

  commitComment = () => {
    this.props.pushComment(this.name.value, this.comment.value)
    this.name.value = ''
    this.comment.value = ''
  }

  render() {
    return (
      <div className={'add-comment'}>
        <div className={'input-item'}>
          <span className={'label'}>用户名</span>
          <input ref={input => this.name = input} type={'text'}/>
        </div>
        <div className={'input-item'}>
          <span className={'label'}>评论内容</span>
          <textarea ref={input => this.comment = input}/>
        </div>
        <button onClick={this.commitComment}>提交</button>
      </div>
    )
  }
}
