import {connect} from 'react-redux';
import CounterComponent from '../components/counter/CounterComponent';
import {increment, decrement, incrementAsync} from '../utils/redux/actions';


export default connect(
  state => ({count: state.counter}),
  {increment, decrement, incrementAsync}
)(CounterComponent)
