import React, { Component } from 'react';
import './App.css';
import Source from './Source';
import Navbar from './Navbar';
import logo from './extra.gif';

class App extends Component {

  constructor(args) {
    super(args);
    this.state = {
      site: "https://extra-extra-rails.herokuapp.com/articles/hacker",
      siteName: "Hacker News"
    }
  }

  espn() {
    this.setState((props, prevState) =>
      {return {site: "https://extra-extra-rails.herokuapp.com/articles/espn", siteName: "ESPN"}
    });
  }

  hacker() {
    this.setState((props, prevState) =>
      {return {site: "https://extra-extra-rails.herokuapp.com/articles/hacker", siteName: "Hacker News"}
    });
  }

  natgeo() {
    this.setState((props, prevState) =>
      {return {site: "https://extra-extra-rails.herokuapp.com/articles/natgeo", siteName: "National Geographic"}
    });
  }

  cnn() {
    this.setState((props, prevState) =>
      {return {site: "https://extra-extra-rails.herokuapp.com/articles/cnn", siteName: "CNN"}
    });
  }

  bbc() {
    this.setState((props, prevState) =>
      {return {site: "https://extra-extra-rails.herokuapp.com/articles/bbc", siteName: "BBC News"}
    });
  }

  wsj() {
    this.setState((props, prevState) =>
      {return {site: "https://extra-extra-rails.herokuapp.com/articles/wsj", siteName: "The Wall Street Journal"}
    });
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="page-header">
          <h1 id="source-header"><img src={logo} height="200" width="200"/>Extra, Extra! <br/> <small>{this.state.siteName}</small></h1>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <div className="App">
              <header><Navbar espnCallback={this.espn.bind(this)} hackerCallback={this.hacker.bind(this)} natgeoCallback={this.natgeo.bind(this)} cnnCallback={this.cnn.bind(this)} bbcCallback={this.bbc.bind(this)} wsjCallback={this.wsj.bind(this)} /></header>
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
