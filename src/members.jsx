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
      <div id="members">
        <h2 className="title">Meet the Team<span className="animate-blink">_</span></h2>
        <div>{this.getMembers()}</div>
      </div>
    );
  }
}

export default Members;
