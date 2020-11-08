import React from "react";
import './index.css'
import axios from 'axios'

export default class UserItem extends React.Component {

  state = {
    searchName: null,
    users: null,
    isLoading: false,
    errorMsg: null,
  }

  componentDidMount() {
    if (this.props.searchName) {
      this.searchUser()
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.searchName) {
      this.setState({searchName: nextProps.searchName})
      this.searchUser()
    }
  }


  searchUser = () => {
    this.setState({isLoading: true})
    axios.get(`https://api.github.com/search/users?q=${this.props.searchName}`)
      .then(response => {
        console.log(response)
        this.setState({
          users: response.data.items,
          isLoading: false
        })
      })
      .catch(error => {
        this.setState({
          errorMsg: error.message,
          isLoading: false
        })
      })
  }

  render() {
    if (this.state.users && this.state.users.length > 0) {
      return (
        <div>
          <ul>
            {
              this.state.users.map(user => (
                <li>
                  <a href={user.html_url}>
                    <img src={user.avatar_url} alt={user.login}/>
                    <span>{user.login}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      )
    } else if (this.state.isLoading) {
      return (
        <h2>正在搜索中请稍后</h2>
      )
    } else if (this.state.errorMsg) {
      return (
        <h2>发生错误: {this.state.errorMsg}</h2>
      )
    } else {
      return (
        <h2>请输入想要搜索的用户</h2>
      )
    }
  }
}
