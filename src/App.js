import React, { Component } from 'react';
import './App.css'

import Add from './components/Add'
import List from './components/ListOfNotes'
import Progress from './components/Progress'
import Filter from './components/Filter'

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">

            <Add />
            <Filter />
            <Progress />
            <List />

          </div>
        </div>
      </div>
    );
  }
}

export default App;