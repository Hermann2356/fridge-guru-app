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
import '../components_stylesheets/Navbar.css';
import AuthLink from "./AuthButton";


class NavbarComponent extends React.Component {

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
            <div className="nav-div">
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
                                        <NavLink href="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem className="nav__item">
                                        <NavLink href="/recipe">Recipes</NavLink>
                                    </NavItem>
                                    <NavItem className="nav__item">
                                        <NavLink href="/profile/">Profile</NavLink>
                                    </NavItem>
                                    <NavItem className="auth__item">
                                        <AuthLink />
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
