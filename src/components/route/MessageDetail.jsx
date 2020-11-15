import React from "react";
import {Card} from "antd";

export default class MessageDetail extends React.Component {

  state = {
    messageDetails: [
      {
        id: 1,
        message: 'money',
        detail: 'I love money'
      },
      {
        id: 2,
        message: 'woman',
        detail: 'I love woman'
      },
      {
        id: 3,
        message: 'power',
        detail: 'I love power'
      },
      {
        id: 4,
        message: 'sexy',
        detail: 'I love sexy'
      }
    ]
  }

  render() {
    // 从this.props.match.params中取出路由参数, 参数都是字符串类型, 有时需要转换
    let {id} = this.props.match.params
    id = parseInt(id)
    let detail = this.state.messageDetails.find(item => item.id === id)
    return (
      <Card title={'Title'} extra={<a href={'https://www.baidu.com'}>More</a> } style={{width: 300}}>
        <p>{detail.id}</p>
        <p>{detail.message}</p>
        <p>{detail.detail}</p>
      </Card>
    )
  }
}
