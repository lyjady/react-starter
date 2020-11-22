import {connect} from 'react-redux'
import CommentComponent from '../components/counter/CommentComponent'
import {pushComment, deleteComment, pushCommentAsync} from '../utils/redux/actions'

export default connect(
  state => ({comments: state.comments}),
  {pushComment, deleteComment, pushCommentAsync}
)(CommentComponent)
