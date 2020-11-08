import React from 'react';
import ReactDOM from 'react-dom';
import './style/axios.css'
import Search from './components/searchuser/search/Search'
import UserItem from './components/searchuser/useritem/UserItem'

class App extends React.Component {

  state = {
    searchName: ''
  }

  setSearchName = searchName => {
    this.setState({searchName})
  }

  render() {
    return (
      <div className={'container'}>
        <Search setSearchName={this.setSearchName} />
        <UserItem searchName={this.state.searchName} />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
