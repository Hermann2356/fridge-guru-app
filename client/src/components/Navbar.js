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
import AuthLink from "./AuthLink";
import {Link} from "react-router-dom";
import auth from "../services/auth";
import Timer from "./Timer";


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
        let active = this.props.active;
        console.log(active);
        return (
            <div id="nav-div">
                <header className="fixed-top">
                    <Navbar
                        className="bg-white border-bottom navbar__container"
                        light
                        expand="md"
                    >
                        <div className="container-fluid ">
                            <div className="col-4">
                                <Link to="/" className={this.props.homeActive+ " " + "navbar__header "} ><NavbarBrand className="header-tab">FridgeGuru</NavbarBrand></Link>
                            </div>
                            <div className="col-3">
                                {
                                    this.props.timerActive ? <Timer /> : ""
                                }
                            </div>
                            <div className="col-4 right-tabs">

                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto" navbar>


                                        <NavItem className=" nav__item">
                                            <Link className={this.props.homeActive+ " " + "nav__link "} to="/">
                                                <NavLink>Home</NavLink>
                                            </Link>
                                        </NavItem>


                                        <NavItem className="nav__item">
                                            <Link className={this.props.recipeActive + " " + "nav__link"} to="/recipe"><NavLink
                                                className="nav__link">Recipes</NavLink></Link>
                                        </NavItem>
                                        <NavItem className="nav__item">
                                            <Link className={this.props.profileActive + " " + "nav__link"} to="/profile">
                                                <NavLink>Profile</NavLink>
                                            </Link>
                                        </NavItem>
                                        <NavItem className="nav__item">
                                            <Link className="nav__link" to="#"><NavLink>Setting</NavLink></Link>
                                        </NavItem>
                                        <NavItem className="auth__item">
                                            <AuthLink/>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </div>
                            <NavbarToggler onClick={this.toggle}/>
                        </div>
                    </Navbar>
                </header>
                <div className="clearfix"></div>
            </div>
        );
    }


};

export default NavbarComponent;
