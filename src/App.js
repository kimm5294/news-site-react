import React, { Component } from 'react';
import './App.css';
import Source from './Source';
import Navbar from './Navbar';

class App extends Component {

  constructor(args) {
    super(args);
    this.state = {
      site: "http://localhost:8080/articles/hacker"
    }
  }

  espn() {
    this.setState((props, prevState) =>
      {return {site: "http://localhost:8080/articles/espn"}
    });
  }

  hacker() {
    this.setState((props, prevState) =>
      {return {site: "http://localhost:8080/articles/hacker"}
    });
  }

  render() {
    return (
      <div className="App">
        <header><Navbar espnCallback={this.espn.bind(this)} hackerCallback={this.hacker.bind(this)}/></header>
        <div className="source">
          <Source site={this.state.site} />
        </div>
      </div>
    );
  }
}

export default App;
