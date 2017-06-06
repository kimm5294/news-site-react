import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {

  constructor(args) {
    super(args);
    this.state = {
      site: ""
    }
  }

  render() {
    return(


      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">

              <li><a href="#espn" onClick={this.props.espnCallback}>
                ESPN
              </a></li>
              <li><a href="#hacker" onClick={this.props.hackerCallback}>
                Hacker News
              </a></li>
              <li><a href="#natgeo" onClick={this.props.natgeoCallback}>
                National Geographic
              </a></li>
              <li><a href="#cnn" onClick={this.props.cnnCallback}>
                CNN
              </a></li>
              <li><a href="#bbc" onClick={this.props.bbcCallback}>
                BBC News
              </a></li>
              <li><a href="#wsj" onClick={this.props.wsjCallback}>
                The Wall Street Journal
              </a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }



}

export default Navbar;
