import React, { Component } from 'react';
import Article from './Article';

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
      <div>
        {this.state.source.map((article, i) =>
          <Article key={i} article={article} />
        )}
      </div>
    )
  }
}

export default Source;