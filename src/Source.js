import React, { Component } from 'react';
import Article from './Article';
import './Source.css';

class Source extends Component {

  constructor(args) {
    super(args);
    this.state = {
      source: []
    }
  }

  componentWillMount() {
    fetch(this.props.site)
    .then((r) => r.json())
    .then((data) => {
      this.setState((prevState, props) => {return {source: data};
      });
    })
  }

  componentWillReceiveProps(nextProps) {
    fetch(nextProps.site)
    .then((r) => r.json())
    .then((data) => {
      this.setState((prevState, props) => {return {source: data};
      });
    })
  }


  render() {
    return (
      <div id="articles-container" className="container-fluid table-responsive">
        {this.state.source.map((article, i) =>
          <Article key={i} article={article} />
        )}
      </div>
    )
  }
}

export default Source;
