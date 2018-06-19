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
          <NavbarBrand href="/"><img src={'/logo.svg'} />CAST</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#papers">Papers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#members">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/veg">
                  <i className="fa fa-github fa-lg"></i>
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
