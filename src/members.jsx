import React, { Component } from 'react';
import Member from './cards/member.jsx';
import membersInfo from './data/members_info.js'

class Members extends Component {
  
  // A simple function that cycles through the members and creates a card for each.
  getMembers = () => {
    let membersList = [];
    for (var key in membersInfo) {
      membersList.push(
        <Member
          image={membersInfo[key].image}
          imagePixelated={membersInfo[key].imagePixelated}
          name={membersInfo[key].name}
          title={membersInfo[key].title} 
          links={membersInfo[key].links}
        />
      )
    }
    return(
      <div className="card-group">
        {membersList}
      </div>
    )
  }

  render() {
    return (
      <div>

        <div id="members">
          <h2 className="title">Team</h2>
          <div>{this.getMembers()}</div>
        </div>
          
        <div style={{marginTop: "10px" }}>
          <h4>Former Members</h4>
          <a style={{ color: "black" }} href="http://sjspielman.org/">
            <p style={{marginBottom: "0"}}>Stephanie Spielman - Assistant Professor (currently Assistant Professor at Rowan University)</p>
          </a>
          <a style={{ color: "black" }} href="http://www.azimuth1.com/about.html">
            <p style={{marginBottom: "0"}}>Ryan Velazquez - Lead Software Developer (currently Data Scientist at Azimuth1)</p>
          </a>
          <p style={{marginBottom: "0"}}>Brittany Rife Magalis - Postdoctoral Researcher (currently Postdoctoral Researcher at University of Florida)</p>
          <a style={{ color: "black" }} href="https://www.inovio.com/">
            <p style={{marginBottom: "0"}}>Sadie Wisotsky - Postdoctoral Researcher (currently Bioinformatics Scientist at INOVIO)</p>
          </a>
        </div>

      </div>
    );
  }
}

export default Members;