import React, {useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import "../../../../../../Downloads/fridge-guru-app-master 3/client/src/components_stylesheets/Navbar.css";

// Render Method
class NavbarComponent extends React.Component {
    // State Values
    state = {
        isOpen: false,
    }

    // Navbar Toggle Method
    toggle = () => {
        this.setState({
            isOpen: !this.isOpen
        })
    };

    render() {
        return (
            <div>
                <header className="fixed-top">
                    <Navbar
                        className="bg-white border-bottom navbar__container"
                        light
                        expand="md"
                    >
                        <div className="container">
                            <NavbarBrand href="/">FridgeGuru</NavbarBrand>
                            <NavbarToggler onClick={this.toggle}/>
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem className="active nav__item">
                                        <NavLink href="#">Home</NavLink>
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
    }


};

export default NavbarComponent;
