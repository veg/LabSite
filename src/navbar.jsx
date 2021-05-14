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
      isOpen: false,
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
          <NavbarBrand href="/"><img src={'/logo.svg'} /> ACME</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="fas fa-bars" style={{padding: "0px", width: "25px", height: "25px" }} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.toggle} href="/#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} href="/#projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} href="/#members">Team</NavLink>
              </NavItem>


              <NavItem>
                <NavLink onClick={this.toggle} href="/#papers">Papers:</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} href="/#papers_covid19">
                  <i className="fas fa-lungs-virus fa-lg" style={{color: "#CD1111"}}></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} href="/#papers_method">
                  <i className="fas fa-tools fa-lg" style={{color: "#8FB3CD"}}></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} href="/#papers_disease">
                  <i className="fas fa-disease fa-lg" style={{color: "#51A76D"}}></i>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink onClick={this.toggle} href="https://github.com/veg">
                  <i className="fab fa-github-square fa-lg"></i>
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
