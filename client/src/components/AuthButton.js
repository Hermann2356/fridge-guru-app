import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {NavLink} from "reactstrap";
import '../components_stylesheets/Navbar.css';
import auth from '../services/auth';

const classes = "btn btn-primary";

const AuthButton = withRouter(({ history }) => {
    if(!auth.isAuthenticated) {
        return <NavLink className="auth__item" href="/login" >Login</NavLink>;
    }

    const logout = () => {
        auth.signout().then(() => history.push('/'));
    }

    return (
            <NavLink className="auth__item" href="/login" onSelect={logout}>Logout</NavLink>
    );
});

export default AuthButton;
