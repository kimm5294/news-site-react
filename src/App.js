import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Source from './Source';

class App extends Component {

  constructor(args) {
    super(args);
    this.state = {
      site: "http://localhost:8080/articles/recent"
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>

        <div className="source">
          <Source site={this.state.site} />
        </div>
      </div>
    );
  }
}

export default App;
