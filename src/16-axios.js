import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'
import axios from 'axios'


class App extends React.Component {

  state = {
    repName: '',
    repUrl: ''
  }

  componentDidMount() {
    axios.get('https://api.github.com/search/repositories?q=Spring&sort=stars').then(res => {
      this.setState({
        repName: res.data.items[1].description,
        repUrl: res.data.items[1].html_url
      })
    })
  }

  render() {
    return (
      this.state.repName ? <h1>Spring Repository <a href={this.state.repUrl}>{this.state.repName}</a> </h1> : <h1>Loading...</h1>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
