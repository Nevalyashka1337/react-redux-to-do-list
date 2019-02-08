import React, { Component } from 'react';
import '../style/App.css'

import AddContainer from '../containers/AddContainer'
import FilterContainer from '../containers/FilterContainer'
import ProgressContainer from '../containers/ProgressContainer'
import ListOfNotesContainer from '../containers/ListOfNotesContainer'

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">

            <AddContainer />
            <FilterContainer />
            <ProgressContainer />
            <ListOfNotesContainer />

          </div>
        </div>
      </div>
    );
  }
}

export default App;