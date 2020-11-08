import React from "react";
import './index.css'

export default class Search extends React.Component {

  setSearchName = () => {
    this.props.setSearchName(this.searchNameInput.value)
  }

  render() {
    return (
      <header>
        <h2>Search Users For Github</h2>
        <input type={'text'} ref={input => this.searchNameInput = input}/>
        <button onClick={this.setSearchName}>Search</button>
      </header>
    )
  }
}
