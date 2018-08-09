import React, { Component } from 'react';
import NavBar from './navbar.jsx';
import Members from './members.jsx';
import Projects from './projects.jsx';
import Papers from './papers.jsx';

class About extends Component {

  render() {
    return(
			<div id="about">
				<h2 className="title">About</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="container lab-container">
          <div className="row">
            <div className="col-lg-4" style={{textAlign:"right"}}>
              <h1 style={{fontFamily:"Share Tech Mono", fontSize:"90px", lineHeight:"1", borderRight: "5px solid #2b328e", paddingRight: "25px"}} >CAST</h1>
            </div>
            <div style={{fontFamily:"Share Tech Mono", textAlign:"left"}} className="col-lg-8">
              <h5>Computational Analysis and Statistical Tools group</h5>
              <h6><span style={{backgroundColor:"#fff"}}>Institute of Genomic and Evolutionary Medicine</span></h6>
              <h6><span style={{backgroundColor:"#fff"}}>Temple University</span></h6>
            </div>
          </div>
        </div>
				<About />
        <Projects />
        <Papers />
        <Members/>
      </div>
    );
  }
}

export default App;
