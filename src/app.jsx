import React, { Component } from 'react';
import NavBar from './navbar.jsx';
import Carousel from './carousel.jsx';
import Members from './members.jsx';
import Projects from './projects.jsx';
import Papers from './papers.jsx';

class App extends Component {
  render() {
    return (
      <div className="App" style={{textAlign:"center"}} >
        <NavBar/>
        <div className="container lab-container">
          <div className="row">
            <div className="col-lg-4" style={{textAlign:"right"}}>
              <h1 style={{fontFamily:"Share Tech Mono", fontSize:"90px", lineHeight:"1", borderRight: "5px solid #2b328e", paddingRight: "25px"}} >POND LAB</h1>
            </div>
            <div style={{fontFamily:"Share Tech Mono", textAlign:"left"}} className="col-lg-8">
              <h1 style={{fontSize:"21px", lineHeight:".15rem"}}>Researching Pathogen Evolution</h1>
              <h1 style={{fontSize:"36px", lineHeight:"3.4rem"}}>Developing Scientific Software</h1>
              <h3 style={{lineHeight:"1.5rem"}}>The Laboratory of Sergei L Kosakovsky Pond</h3>
              <h6>Institue of Genomic and Evolutionary Medicine</h6>
              <h6>Temple University</h6>
            </div>
          </div>
        </div>
        {/*
        <h2></h2>
        <Carousel ride="carousel" interval="200"/>
        <h2></h2>
        */}
        <Members/>
        <Projects />
        <Papers />
      </div>
    );
  }
}

export default App;
