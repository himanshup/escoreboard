import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class OwerwatcNav extends Component {
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
        <Navbar dark expand="md">
          <div className="container">
            <Link to="/" className="navbar-brand">
              eScoreboard | Overwatch
            </Link>
            <NavbarToggler onClick={() => this.toggle()} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link to={`${this.props.match.url}`} className="nav-link">
                    Home
                  </Link>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to={`${this.props.match.url}/owl`} className="nav-link">
                    OW League
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to={`${this.props.match.url}/wc`} className="nav-link">
                    World Cup
                  </Link>
                </NavItem>

                <NavItem>
                  <Link to="/about" className="nav-link">
                    about
                  </Link>
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

export default OwerwatcNav;
