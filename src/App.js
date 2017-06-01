import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(args) {
    super(args);
    this.state = {
      articles: []
    }
  }

  componentWillMount() {
    fetch("http://localhost:8080/articles/recent")
    .then((r) => r.json())
    .then((data) => {
      this.setState((prevState, props) => {
        return {articles: data};
      });
    })
  }

  render() {
    console.log(this.state.articles)
    return (
      <div className="App">
        {this.state.articles.map((tweet, i) =>
          <div key={i}>
            <span>{tweet.title}</span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
