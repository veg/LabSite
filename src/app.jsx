import React, { Component } from 'react';
import NavBar from './navbar.jsx';
import Carousel from './carousel.jsx';
import Members from './members.jsx';
import Projects from './projects.jsx';
import Papers from './papers.jsx';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: "#f4f8ff", textAlign:"center"}} >
        <NavBar/>
        <h2 style={{height:"4rem"}}></h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-4" style={{textAlign:"right"}}>
              <h1 style={{fontSize:"120px", lineHeight:"5.5rem"}} >Pond </h1>
              <h1 style={{fontSize:"120px", lineHeight:"5.5rem"}} >Lab</h1>
            </div>
            <div style={{textAlign:"left"}} className="col-lg-8">
              <h1 style={{lineHeight:"1.6rem"}}>Researching Pathogen Evolution</h1>
              <h1 style={{lineHeight:"3rem"}}>Developing Scientific Software</h1>
              <h3 style={{lineHeight:"3.5rem"}}>The Laboratory of Sergei L Kosakovsky Pond</h3>
              <h5>Institue of Genomic and Evolutionary Medicine</h5>
              <h5 style={{lineHeight:"1rem"}}>Temple University</h5>
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
