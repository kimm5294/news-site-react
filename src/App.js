import React, { Component } from 'react';
import './App.css';
import Source from './Source';
import Navbar from './Navbar';

class App extends Component {

  constructor(args) {
    super(args);
    this.state = {
      site: "http://localhost:8080/articles/hacker",
      siteName: "Hacker News"
    }
  }

  espn() {
    this.setState((props, prevState) =>
      {return {site: "http://localhost:8080/articles/espn", siteName: "ESPN"}
    });
  }

  hacker() {
    this.setState((props, prevState) =>
      {return {site: "http://localhost:8080/articles/hacker", siteName: "Hacker News"}
    });
  }

  natgeo() {
    this.setState((props, prevState) =>
      {return {site: "http://localhost:8080/articles/natgeo", siteName: "National Geographic"}
    });
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="page-header">
          <h1 id="source-header">{this.state.siteName}</h1>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <div className="App">
              <header><Navbar espnCallback={this.espn.bind(this)} hackerCallback={this.hacker.bind(this)} natgeoCallback={this.natgeo.bind(this)} /></header>
            </div>
          </div>
          <div className="col-lg-10">
            <nav className="navbar navbar-default navbar-fixed-side">
              <div className="source">
                <Source site={this.state.site} />
              </div>
            </nav>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
