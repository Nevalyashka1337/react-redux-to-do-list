import React, { Component } from 'react';
import 'Style/App.scss'

import Add from 'Containers/Add'
import Filter from 'Containers/Filter'
import Progress from 'Containers/Progress'
import ListOfNotes from 'Containers/ListOfNotes'

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