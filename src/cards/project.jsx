import React, { Component } from 'react';

class Project extends Component {

  render() {
    return(
			<li className="media project-media">
        <a href={this.props.links.website} >
          <img className="mr-3" style={{maxWidth:"65px"}} src={this.props.image} alt="Card image cap" />
        </a>
				<div className="media-body">
          <a href={this.props.links.website} >
            <h5 className="mt-0">{this.props.name}</h5>
          </a>
					{this.props.longDescription}
				</div>
			</li>
    );
  }
}

export default Project;
