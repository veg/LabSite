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
              <h5>Researching Pathogen Evolution</h5>
              <h1>Developing Scientific Software</h1>
              <h4>The Laboratory of Sergei L Kosakovsky Pond</h4><br />
              <h6><span style={{backgroundColor:"#fff"}}>Institute of Genomic and Evolutionary Medicine</span></h6>
              <h6><span style={{backgroundColor:"#fff"}}>Temple University</span></h6>
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
