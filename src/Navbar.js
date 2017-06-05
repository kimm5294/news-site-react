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
      <nav>
        <a href="#espn" onClick={this.props.espnCallback}>
          ESPN
        </a>
        |
        <a href="#hacker" onClick={this.props.hackerCallback}>
          Hacker
        </a>
      </nav>
    )
  }



}

export default Navbar;