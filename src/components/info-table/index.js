import React, { Component } from 'react';
import {connect} from 'react-redux'
import InfoItem from '../info-item'

class InfoTable extends Component {

  render() {
    const info = this.props.info.map(infoItem =>
      <li key={infoItem}>
        <InfoItem infoItem={infoItem}/>
      </li>
    )

    return (
      <div></div>
    )
  }
}

export default connect(state => ({
  info: state.info
}))(InfoTable);