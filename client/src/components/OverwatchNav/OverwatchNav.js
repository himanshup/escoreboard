import React, { Component } from "react";
import HamburgerMenu from "react-hamburger-menu";
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
      open: false
    };
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <Link to="/" className="navbar-brand">
              eScoreboard
            </Link>
            <NavbarToggler onClick={() => this.handleClick()}>
              <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={() => this.handleClick()}
                width={27}
                height={17}
                strokeWidth={1}
                rotate={0}
                color="white"
                borderRadius={0}
                animationDuration={0.3}
                className="hamburgerMenu"
              />
            </NavbarToggler>
            <Collapse isOpen={this.state.open} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link
                    to={`${this.props.match.url}`}
                    className={`nav-link ${
                      window.location.pathname === "/ow" ? "active" : ""
                    }`}
                  >
                    Overwatch
                  </Link>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link
                    to={`${this.props.match.url}/owl`}
                    className={`nav-link ${
                      window.location.pathname.includes(
                        `${this.props.match.url}/owl`
                      )
                        ? "active"
                        : ""
                    }`}
                  >
                    OW League
                  </Link>
                </NavItem>
                <NavItem className="pr-4">
                  <Link
                    to={`${this.props.match.url}/wc`}
                    className={`nav-link ${
                      window.location.pathname.includes(
                        `${this.props.match.url}/wc`
                      )
                        ? "active"
                        : ""
                    }`}
                  >
                    World Cup
                  </Link>
                </NavItem>
                <NavItem className="pl-4 verticalLine d-none d-md-block ">
                  <NavLink href="https://github.com/himanshup/escoreboard">
                    source
                  </NavLink>
                </NavItem>
                <NavItem className="d-sm-block d-md-none ">
                  <NavLink href="https://github.com/himanshup/escoreboard">
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
