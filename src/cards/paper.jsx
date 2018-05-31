import React, { Component } from 'react';


class Paper extends Component {

  render() {
    return(
      <a href={this.props.link}>
      <center>
        <div className="card" style={{width: "45%"}}>
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.props.authors}</p>
            <p className="card-text">{this.props.publication}</p>
            <p className="card-text">{this.props.date}</p>
          </div>
        </div>
      </center>
      </a>
    );
  }
}

export default Paper;
