// Import Libraires
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import {Link} from  'react-router-dom'
import '../components_stylesheets/Navbar.css';

// Import Styles
import "../components_stylesheets/Navbar.css";

// Render Method
const NavbarComponent = () => {
  // State Values
  const [isOpen, setIsOpen] = useState(false);

  // Navbar Toggle Method
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <header className="fixed-top">
        <Navbar
          className="bg-white border-bottom navbar__container"
          light
          expand="md"
        >
          <div className="container">
            <Link to="/">
              <NavbarBrand>FridgeGuru</NavbarBrand>
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="active nav__item">
                  <NavLink>
                    <Link className="nav__link" to="/">
                      Home
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem className="nav__item">
                  <NavLink href="#">Recipes</NavLink>
                </NavItem>
                <NavItem className="nav__item">
                  <NavLink href="#">Settings</NavLink>
                </NavItem>
                <NavItem className="nav__item">
                  <NavLink href="#">Sign Out</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </header>
      <div className="clearfix"></div>
    </div>
  );
};

export default NavbarComponent;
