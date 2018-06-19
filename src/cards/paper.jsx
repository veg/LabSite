import React, { Component } from 'react';


class Paper extends Component {

  render() {
    return(
          <li className="media">
            <div className="media-body">
              <h5 className="mt-0">{this.props.title}</h5>
                {this.props.authors}
                <p>{this.props.publication}, {this.props.date}</p>
            </div>
          </li>
    );
  }
}

export default Paper;
