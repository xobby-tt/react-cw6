import React from 'react';
import './app.css';
import Search from './search';
import InfoTable from './info-table';


function App() {
  return (
    <div className="container-fluid">
      <div className="col-md-12 main-content">
        
        <div className="row">          
        <div className="col-md-1"></div>
          <div className="col-md-7">
            <h1>Таблица</h1>
          </div>
          <div className="col-md-3">
            <Search />
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row">          
        <div className="col-md-1"></div>
          <div className="col-md-10">
            <InfoTable />
          </div>
          <div className="col-md-1"></div>
        </div>

      </div>
    </div>
  )
}

export default App