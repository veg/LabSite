import React, { Component } from "react";
import NavBar from "./navbar.jsx";
import Members from "./members.jsx";
import Projects from "./projects.jsx";
import Papers from "./papers.jsx";
import Papers_covid19 from "./papers_covid19.jsx";
import Papers_method from "./papers_method.jsx";
import Papers_disease from "./papers_disease.jsx";




import Announce from "./announcement.jsx";

class About extends Component {
  render() {
    return (
      <div id="about">
        <h2 className="title">About</h2>
        <p>
          We develop statistical models and computational tools for comparative
          analysis of sequence data, especially large and rich data sets from
          measurably evolving pathogens. We relish scientific and engineering
          challenges involved in creating scalable and useable tools for our own
          research and for use by the broader community. We are omnivorous in
          applied research problems and currently work on problems in molecular
          epidemiology of HIV, dynamics of immune repertoires, pathogenesis and
          within-host evolution of HIV and SIV, and optimal use of next
          generation sequencing data.
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Announce />
        <NavBar />
        <div className="container lab-container">
          <div className="row">
            <div className="col-lg-4" style={{ textAlign: "right" }}>
              <h1
                style={{
                  fontFamily: "Share Tech Mono",
                  fontSize: "90px",
                  lineHeight: "1",
                  borderRight: "5px solid #2b328e",
                  paddingRight: "25px",
                }}
              >
                ACME
              </h1>
            </div>
            <div
              style={{ fontFamily: "Share Tech Mono", textAlign: "left" }}
              className="col-lg-8"
            >
              <h5>Acme Computational Molecular Evolution Group</h5>
              <h6>
                <span>Institute of Genomic and Evolutionary Medicine</span>
              </h6>
              <h6>
                <span>Temple University</span>
              </h6>
            </div>
          </div>
        </div>
        <About />
        <Projects />
        <Members />
        <Papers />
        <Papers_covid19 />
        <Papers_method />
        <Papers_disease />
      </div>
    );
  }
}

export default App;
