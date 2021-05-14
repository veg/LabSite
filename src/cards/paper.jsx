import React, { Component } from 'react';


class Paper extends Component {

  render() {
    return(
          <li className="media">
            <div className="media-body">
              <a href={this.props.link}>
                <h5 className="mt-0">{this.props.title}</h5>
              </a>
              {this.props.authors}
              <p><i>{this.props.publication}</i>, {this.props.date}</p>
            </div>
          </li>
    );
  }
}

export default Paper;
