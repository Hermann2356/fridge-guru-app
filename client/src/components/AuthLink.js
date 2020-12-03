import React from 'react';
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import {NavLink} from "reactstrap";
import auth from '../services/auth';


const AuthLink = withRouter(({ history }) => {
    if(!auth.isAuthenticated) {
        return (
            <Link  className="nav__link"  to="/login">
                <NavLink>Login</NavLink>
            </Link>);
    }

    const logout = () => {
        auth.signout().then(() => history.push('/login'));
    }

    return (

                <Link  className="nav__link"  onClick={logout} >
                    <NavLink>Logout</NavLink>
                </Link>
    );
});

export default AuthLink;
