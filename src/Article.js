import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div className="media">
        <div className="media-left media-middle">
          <a>
            <img className="media-object img-rounded" height="200" width="200" src={this.props.article.urlToImage} alt="No Image Provided"/>
          </a>
        </div>

        <div className="media-body">
          <h4 className="media-heading">{this.props.article.title}</h4>
          {this.props.article.description}

          <ul>
            {this.props.article.author
              ? <li>{this.props.article.author}</li>
              : <li>Anonymous</li>
            }
            <li><a href={this.props.article.url}>Read more here</a></li>
          </ul>
        </div>
      </div>
    )
  }

}

export default Article;
