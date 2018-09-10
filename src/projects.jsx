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
      <ul className="list-unstyled pull-left">
        {projectsList}
      </ul>
    )
  }

  render() {
    return (
      <div id="projects">
        <h2 className="title">Projects</h2>
        <div>{this.getProjects('major')}</div>
				<p>To see more, please visit our <a href="https://github.com/veg" style={{color:"#2b328e"}}>Github Page</a></p>
      </div>
    );
  }
}

export default Projects;
