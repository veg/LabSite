import React, { Component } from 'react';

// An object with the font-awesome icon classNames.
const Icons = {
  "twitter": "fab fa-twitter",
  "github": "fa fa-github",
  "linkedin": "fab fa-linkedin-in",
  "website": "fa fa-globe",
  "googlescholar": "fa fa-graduation-cap"
}

class Member extends Component {

  // A simple function that cycles through the links and creates a button for each link.
  // This allows an arbitrary number of links to be passed in.
  getLinks = () => {
    let linksList = [];
    let links = this.props.links;
    for (var key in links) {
      linksList.unshift(
        <a href={links[key]} className="btn btn-light">
          <i href={links[key]} className={Icons[key]}></i>
        </a>
      )
    }
    return(
      <div>
        {linksList}
      </div>
    )
  }

  render() {
    return(
      <div 
        className="card members" 
        onMouseEnter={this.hover}
        onMouseLeave={this.hover}
      >
        <img className="card-img-top" src={this.props.image} alt="Card image cap" />
        <div className="card-body">
          <span className="credentials">Username:</span>
          <p className="card-title">{this.props.name}<span className="blink_me">|</span></p>
          <span className="credentials">Password:</span>
          <p className="card-text">{this.props.title}</p>
          {this.getLinks()} 
        </div>
      </div>
    );
  }
}

export default Member;
