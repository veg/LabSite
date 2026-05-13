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
          <a style={{ color: "black" }} href="http://aglucaci.github.io/">
            <p style={{marginBottom: "0"}}>Alexander Lucaci - Doctoral Student</p>
          </a>
          <p style={{marginBottom: "0"}}>Jordan Zehr - Doctoral Student</p>
          <a style={{ color: "black" }} href="https://sjspielman.github.io/">
            <p style={{marginBottom: "0"}}>Stephanie Spielman - Postdoc</p>
          </a>
          <p style={{marginBottom: "0"}}>Ryan Velazquez - Senior Software Developer</p>
          <p style={{marginBottom: "0"}}>Stephen Shank - Senior Software Developer</p>
          <p style={{marginBottom: "0"}}>Brittany Rife Magalis - Postdoc</p>
          <p style={{marginBottom: "0"}}>Sadie Wisotsky - Postdoc</p>
        </div>

      </div>
    );
  }
}

export default Members;
