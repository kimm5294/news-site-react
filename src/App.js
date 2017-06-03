import React, { Component } from 'react';
import './App.css';
import Source from './Source';
import Navbar from './Navbar';

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
        <header><Navbar /></header>
        <div className="source">
          <Source site={this.state.site} />
        </div>
      </div>
    );
  }
}

export default App;
