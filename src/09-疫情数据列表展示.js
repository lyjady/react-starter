import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css'
import data from './json/feiyan.json'

const provinceData = {}
const provinceArray = []

data.data.list.forEach(item => {
  if (provinceData[item.province]) {
    provinceData[item.province].confirm += item.confirm
    provinceData[item.province].suspect += item.suspect
    provinceData[item.province].heal += item.heal
    provinceData[item.province].dead += item.dead
  } else {
    provinceData[item.province] = {
      confirm: item.confirm,
      suspect: item.confirm,
      heal: item.heal,
      dead: item.dead,
    }
  }
})
for (let province in provinceData) {
  province = {
    confirm: provinceData[province].confirm,
    suspect: provinceData[province].suspect,
    heal: provinceData[province].heal,
    dead: provinceData[province].dead,
    province
  }
  provinceArray.push(province)
}

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: provinceArray
    }
  }
  render() {
    return (
      <ul>
        <li>
          <span>省份</span>
          <span>确诊数</span>
          <span>疑似数</span>
          <span>治愈数</span>
          <span>死亡数</span>
        </li>
        {
          this.state.data.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.province}</span>
                <span>{item.confirm || 0}</span>
                <span>{item.suspect || 0}</span>
                <span>{item.heal || 0}</span>
                <span>{item.dead || 0}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

ReactDOM.render(
  <MapComponent />,
  document.querySelector('#root')
)
