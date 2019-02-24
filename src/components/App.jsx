import React, { Component } from 'react';
import '../style/App.scss'

import Add from '../containers/Add'
import Filter from '../containers/Filter'
import Progress from '../containers/Progress'
import ListOfNotes from '../containers/ListOfNotes'

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">

            <Add />
            <Filter />
            <Progress />
            <ListOfNotes />

          </div>
        </div>
      </div>
    );
  }
}

export default App;