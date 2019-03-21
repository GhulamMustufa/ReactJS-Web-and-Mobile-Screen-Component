import React, { Component } from "react";
import "./App.css";
import InteractiveMobileSection from "./components/interactiveMobileSection";
import MonitorFront from "./components/MonitorFront";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">App</NavbarBrand>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/web">Web</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/mobile">Mobile</NavLink>
              </NavItem>
            </Nav>
          </Navbar>

          <Route path="/" exact component={InteractiveMobileSection} />
          <Route path="/web" component={MonitorFront} />
          <Route path="/mobile" component={InteractiveMobileSection} />
        </div>
      </Router>
    );
  }
}

export default App;
