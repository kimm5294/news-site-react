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

          <div>
            <ul className="nav flex-column">

              <li className="nav-item"><a className="nav-link" href="#espn" onClick={this.props.espnCallback}>
                ESPN
              </a></li>
              <li className="nav-item"><a className="nav-link" href="#hacker" onClick={this.props.hackerCallback}>
                Hacker News
              </a></li>
              <li className="nav-item"><a className="nav-link" href="#natgeo" onClick={this.props.natgeoCallback}>
                National Geographic
              </a></li>
              <li className="nav-item"><a className="nav-link" href="#cnn" onClick={this.props.cnnCallback}>
                CNN
              </a></li>
              <li className="nav-item"><a className="nav-link" href="#bbc" onClick={this.props.bbcCallback}>
                BBC News
              </a></li>
              <li className="nav-item"><a className="nav-link" href="#wsj" onClick={this.props.wsjCallback}>
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
