import React, { Component } from 'react';
import '../style/App.css'

import Add from './Add'
import Filter from './Filter'
import Progress from './Progress'
import ListOfNotes from './ListOfNotes'

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