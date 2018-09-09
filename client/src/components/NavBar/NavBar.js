import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="secondary" dark expand="md">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                src="https://png.icons8.com/color/1600/league-of-legends.png"
                alt=""
                width="45"
                className="mr-3"
              />
              eScoreboard
            </Link>
            <NavbarToggler onClick={() => this.toggle()} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/na" className="nav-link">
                    NA
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/eu" className="nav-link">
                    EU
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/lck" className="nav-link">
                    LCK
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/lpl" className="nav-link">
                    LPL
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/lms" className="nav-link">
                    LMS
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    about
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    source
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
