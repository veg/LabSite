import React, { Component } from 'react';

// An object with the font-awesome icon classNames.
const Icons = {
  "github": "fa fa-github",
  "website": "fa fa-globe",
  "paper": "fa fa-graduation-cap"
}

class Project extends Component {

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
        className="card" 
        onMouseEnter={this.hover}
        onMouseLeave={this.hover}
      >
        {this.props.tag == 'major' ? 
          <div style={{minHeight:"14rem"}} >
            <img className="card-img-top" src={this.props.image} alt="Card image cap" />
          </div>
            :
            null}
        <div className="card-body">
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">{this.props.longDescription}</p> 
          <p>{this.getLinks()}</p> 
        </div>
      </div>
    );
  }
}

export default Project;
