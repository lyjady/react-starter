import {INCREMENT, DECREMENT, PUSH_COMMENT, DELETE_COMMENT} from './action_type'
import {combineReducers} from 'redux';
import {array, instanceOf} from "prop-types";

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      return state - action.data
    default:
      return state
  }
}

function comments(state = [], action) {
  switch (action.type) {
    case PUSH_COMMENT:
      if (Array.isArray(action.data)) {
        return [...action.data, ...state]
      } else {
        return [action.data, ...state]
      }
    case DELETE_COMMENT:
      return state.filter((item, index) => index !== action.data)
    default:
      return state
  }
}

export default combineReducers({counter, comments})
