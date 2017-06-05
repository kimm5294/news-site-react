import React, { Component } from 'react';

class Article extends Component {

  constructor(args) {
    super(args);

    this.author = this.author.bind(this)
    this.writtenOn = this.writtenOn.bind(this)

  }

  author(article) {
    if (article.author) {
      return article.author
    } else {
      return "Anonymous"
    }
  }

  writtenOn(article) {
    if(article.publishedAt) {
      return `on ${new Date(article.publishedAt)}`
    } else {
      return ""
    }
  }

  render() {
    return (
      <div className="media table">
        <div className="media-left media-middle">
          <a>
            <img className="media-object img-rounded" height="171" width="180" src={this.props.article.urlToImage} alt="No Image Available"/>
          </a>
        </div>

        <div className="media-body">
          <a href={this.props.article.url}>
            <h4 className="media-heading">{this.props.article.title}</h4>
          </a>
          {this.props.article.description}
          <p>
            Written by {this.author(this.props.article)} {this.writtenOn(this.props.article)}
          </p>
        </div>
      </div>
    )
  }

}

export default Article;
