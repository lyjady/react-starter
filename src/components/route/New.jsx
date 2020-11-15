import React from "react";
import {List} from "antd";

export default class New extends React.Component {

  state = {
    news: [
      'News1', 'News2', 'News3', 'News4', 'News5'
    ]
  }

  render() {
    return (
      <div>
        <List size={'small'} dataSource={this.state.news} renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    )
  }
}
