import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="fixed-top" style={{backgroundColor:"#2b328e"}} expand="md">
          <NavbarBrand href="/">Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#members">Meet the Team_</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#projects">&lt; Projects /&gt;</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#papers">../Selected_Papers</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
