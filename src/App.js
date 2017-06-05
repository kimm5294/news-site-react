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

  natgeo() {
    this.setState((props, prevState) =>
      {return {site: "http://localhost:8080/articles/natgeo"}
    });
  }


  render() {
    return (
      <div className="App">
        <header><Navbar espnCallback={this.espn.bind(this)} hackerCallback={this.hacker.bind(this)} natgeoCallback={this.natgeo.bind(this)} /></header>
        <div className="source">
          <Source site={this.state.site} />
        </div>
      </div>
    );
  }
}

export default App;
