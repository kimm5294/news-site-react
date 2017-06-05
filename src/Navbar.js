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
        <ul className="nav nav-tabs">
          <li role="presentation"><a href="#espn" onClick={this.props.espnCallback}>
            ESPN
          </a></li>
          <li role="presentation" class="active"><a href="#hacker" onClick={this.props.hackerCallback}>
            Hacker News
          </a></li>
          <li role="presentation"><a href="#natgeo" onClick={this.props.natgeoCallback}>
            National Geographic
          </a></li>
        </ul>
      </nav>
    )
  }



}

export default Navbar;
