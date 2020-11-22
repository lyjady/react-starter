import {INCREMENT, DECREMENT, PUSH_COMMENT, DELETE_COMMENT} from "./action_type";

// 同步的action返回一个对象
// 异步的action返回一个函数
export const increment = number => {
  return {type: INCREMENT, data: number}
}

export const decrement = number => {
  return {type: DECREMENT, data: number}
}

// 一般异步版本的action都会有一个同步的action, 在异步的action里面调用同步的action
export const incrementAsync = number => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment(number))
    }, 1000)
  }
}

export const pushComment = comment => ({type: PUSH_COMMENT, data: comment})

export const deleteComment = index => ({type: DELETE_COMMENT, data: index})

export const pushCommentAsync = initComment => {
  return dispatch => {
    setTimeout(() => {
      dispatch(pushComment(initComment))
    }, 1000)
  }
}
