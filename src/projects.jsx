import React, { Component } from 'react';
import Project from './cards/project.jsx';
import projectsInfo from './data/project_info.js'

class Projects extends Component {
  
  // A simple function that cycles through the projects and creates a card for each.
  getProjects = (tag) => {
    let projectsList = [];
    for (var key in projectsInfo) {
      if (projectsInfo[key].tag == tag) {
        projectsList.push(
          <Project
            image={projectsInfo[key].image}
            name={projectsInfo[key].name}
            shortDescription={projectsInfo[key].shortDescription} 
            longDescription={projectsInfo[key].longDescription} 
            links={projectsInfo[key].links}
            tag={projectsInfo[key].tag}
          />
        )
      }
    }
    return(
      <div className="card-group">
        {projectsList}
      </div>
    )
  }

  render() {
    return (
      <div id="projects">
        <h2 className="title">&lt; Projects /&gt;</h2>
        <div>{this.getProjects('major')}</div>
        <div>{this.getProjects('minor')}</div>
      </div>
    );
  }
}

export default Projects;
