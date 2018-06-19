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
			<li className="media project-media">
				<img className="mr-3" style={{maxWidth:"65px"}} src={this.props.image} alt="Card image cap" />
				<div className="media-body">
					<h5 className="mt-0">{this.props.name}</h5>
					{this.props.longDescription}
				</div>
			</li>
    );
  }
}

export default Project;
