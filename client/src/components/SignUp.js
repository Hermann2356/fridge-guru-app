import React from "react";
import "../components_stylesheets/LoginSignUp.scss";

function SignUp(props) {
    let {userError, emailError} = "";

    if(props.userError){ userError = <p className="alert_signup" role="alert"> Username Already Used</p>};
    if(props.emailError){ emailError = <p className="alert_signup" role="alert"> Email Already Used</p>};
    return (
        <div className="base-container" ref={props.containerRef}>
            <div className="header">Sign Up</div>
            <div className="content">
                <div className="image">

                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"
                               value={props.userState} onChange={props.userOnChange}/>
                        { userError }
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email"
                               value={props.emailState} onChange={props.emailOnChange} />
                        { emailError }
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"
                               value={props.passwordState} onChange={props.passwordOnChange}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn">
                    Register
                </button>
            </div>
        </div>
    );
};

export default SignUp;