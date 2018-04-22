import React, { Component } from 'react';
import { connect } from 'react-redux'
import InfoItem from '../info-item'
import './info-table.css'

class InfoTable extends Component {

  render() {
    const info = this.props.info.map(infoItem =>
      <InfoItem infoItem={infoItem} />
    )

    return (
      <div className="table-container">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>
                <div className="row">
                  <div className="col-md-1">
                    ФИО
                  </div>
                  <div className="col-md-9"></div>
                  <div className="col-md-1">
                    <button type="button" class="btn btn-outline-primary">▼</button>
                  </div>
                </div>
              </th>
              <th>
                <div className="row">
                  <div className="col-md-1">
                    Дата
                  </div>
                  <div className="col-md-7 "></div>
                  <div className="col-md-1">
                    <button type="button" class="btn btn-outline-primary">▼</button>
                  </div>
                </div>
              </th>
              <th>
                <div className="row">
                  <div className="col-md-1">
                    Справочник1
                  </div>
                  <div className="col-md-9"></div>
                  <div className="col-md-1">
                    <button type="button" class="btn btn-outline-primary">▼</button>
                  </div>
                </div>
              </th>
              <th>
                <div className="row">
                  <div className="col-md-1">
                    Справочник2
                  </div>
                  <div className="col-md-9"></div>
                  <div className="col-md-1">
                    <button type="button" class="btn btn-outline-primary">▼</button>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {info}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(state => ({
  info: state.info
}))(InfoTable);