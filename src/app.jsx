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
        <p>We develop models and computational approaches for comparative analysis of sequence data, especially large and rich data set from measurably evolving pathogens. We also apply evolutionary algorithms and machine learning techniques to complex problems in sequence evolution, especially in the context of HIV population history, adaptation to new hosts, transmission, immune escape, and the development of drug resistance.</p>
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
              <h1 style={{fontFamily:"Share Tech Mono", fontSize:"90px", lineHeight:"1", borderRight: "5px solid #2b328e", paddingRight: "25px"}} >ACME</h1>
            </div>
            <div style={{fontFamily:"Share Tech Mono", textAlign:"left"}} className="col-lg-8">
              <h5>Acme Computational Molecular Evolution Group</h5>
              <h6><span>Institute of Genomic and Evolutionary Medicine</span></h6>
              <h6><span>Temple University</span></h6>
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
