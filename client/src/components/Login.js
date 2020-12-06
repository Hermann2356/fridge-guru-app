import React from "react";
import "../components_stylesheets/LoginSignUp.scss";

function Login(props) {

    return (
        <div className="base-container" ref={props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="image">

                </div>

                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email"
                               value={props.emailState} onChange={props.emailOnChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"
                               value={props.passwordState} onChange={props.passwordOnChange}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;