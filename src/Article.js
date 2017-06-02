import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.article.title}</h3>
        <p>
          {this.props.article.description}
        </p>

        <ul>
          {this.props.article.author
            ? <li>{this.props.article.author}</li>
            : <li>Anonymous</li>
          }
          <li><a href={this.props.article.url}>Read more here</a></li>
        </ul>
      </div>
    )
  }

}

export default Article;