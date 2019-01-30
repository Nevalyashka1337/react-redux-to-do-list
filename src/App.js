import React, { Component } from 'react';
import './App.css'

import Add from './components/add'
import List from './components/list'

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">

            <Add />
            <List />
            
            {/* <div className="row mt-2">
              <div className="col">
                <div className="input-group">
                  <input type="text" name="text" className="form-control" placeholder="search" />
                </div>
              </div>
            </div> */}

            {/* <div className="row mt-2">
              <div className="col">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ "width": 10 + "%" }} aria-valuenow={10} aria-valuemin="0" aria-valuemax="100">{10}%</div>
                </div>
              </div>
            </div> */}

            {/* <div className="row mt-3">
              <div className="col">

                <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
                  <label onClick={this.handleCategory} className="btn btn-outline-info">
                    <input type="radio" name="all" id="option1" autoComplete="off" defaultChecked/>All <span className="badge badge-light"></span>
                  </label>
                  <label onClick={this.handleCategory} className="btn btn-outline-primary">
                    <input type="radio" name="ative" id="option2" autoComplete="off"/>Active <span className="badge badge-light"></span>
                  </label>
                  <label onClick={this.handleCategory} className="btn btn-outline-success">
                    <input type="radio" name="completed" id="option3" autoComplete="off"/>Completed <span className="badge badge-light"></span>
                  </label>
                </div>

              </div>
            </div> */}


          </div>
        </div>
      </div>
    );
  }
}

export default App;
