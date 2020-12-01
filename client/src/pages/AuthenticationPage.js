import React from "react";
import "../components_stylesheets/Authentication.scss"
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import auth from "../services/auth"
import {Redirect} from 'react-router-dom';

function RightSide(props) {
    return (
        <div
            className="right-side"
            ref={props.containerRef}
            onClick={props.onClick}
        >
            <div className="inner-container">
                <div className="text">{props.current}</div>
            </div>
        </div>
    );
};


class AuthenticationPage extends React.Component {

    state = {
        isLoginActive: true,
        redirectToReferrer: false,
        failed: false,
        userError: false,
        emailError: false,
        failedMessage: "",
        userid: null,
        username: "",
        email: "",
        password: "",
    }

    componentDidMount() {
        this.rightSide.classList.add("right");
    }


    login = (e) => {
        e.preventDefault();
        let {email, password} = this.state;
        auth.authenticate(email, password)
            .then((user) => {
                console.log(user.id);
                this.setState({
                    userId: user.id,
                    redirectToReferrer: true
                });
            })
            .catch((err) => {
                this.setState({failed: true, failedMessage: "Login Failed"});
            });
    }


    isRegistered = (username, email) => {
        auth.isUsernameRegistered(username)
            .then(user => {
                if (user) {
                    this.setState({
                        userError: true,
                    })
                }
            });

        auth.isEmailRegistered(email)
            .then(user => {
                if (user) {
                    this.setState({
                        emailError: true,
                    })
                }
            });
    }

    signup = (e) => {
        e.preventDefault();
        let {username, email, password} = this.state;
        this.isRegistered(username, email);
        if (!this.state.userError && !this.state.emailError) {
            auth.signup(username, email, password)
                .then((user) => {
                    this.setState({redirectToReferrer: true});
                })
                .catch((err) => {

                });
        }


    }

    clear = () => {
        this.setState({
            failed: false,
            userError: false,
            emailError: false,
            username: "",
            email: "",
            password: "",
            failedMessage: "",
        });
    }

    changeState = () => {
        const {isLoginActive} = this.state;

        if (isLoginActive) {
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("left");
            this.clear();
        } else {
            this.rightSide.classList.remove("left");
            this.rightSide.classList.add("right");
            this.clear();
        }
        this.setState(prevState => ({isLoginActive: !prevState.isLoginActive}));
    }

    fieldChanged = (name) => {

        return (event) => {
            let {value} = event.target;
            this.setState({[name]: value});
        }
    }


    render() {
        const {isLoginActive} = this.state;
        const current = isLoginActive ? "Register" : "Login";
        const currentActive = isLoginActive ? "login" : "register";
        const {from} = this.props.location.state ||
        {from: {pathname: `/?userId=${this.state.userId}`}};
        const {redirectToReferrer, failed} = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from}/>;
        }

        let err = "";
        if (failed) {
            err = <div className="alert alert-danger" role="alert">{this.state.failedMessage}</div>;
        }

        return (
            <div className="App">
                <div className="login">
                    <div className="container" ref={ref => (this.container = ref)}>
                        {isLoginActive && (
                            <form onSubmit={this.login}>
                                <Login containerRef={ref => (this.current = ref)}
                                       emailState={this.state.email}
                                       passwordState={this.state.password}
                                       emailOnChange={this.fieldChanged('email')}
                                       passwordOnChange={this.fieldChanged('password')}
                                />
                            </form>
                        )}
                        {!isLoginActive && (
                            <form onSubmit={this.signup}>
                                <SignUp containerRef={ref => (this.current = ref)}
                                        userState={this.state.username}
                                        userError={this.state.userError}
                                        emailError={this.state.emailError}
                                        emailState={this.state.email}
                                        passwordState={this.state.password}
                                        userOnChange={this.fieldChanged('username')}
                                        emailOnChange={this.fieldChanged('email')}
                                        passwordOnChange={this.fieldChanged('password')}
                                />
                            </form>
                        )}
                        {err}
                    </div>
                    <RightSide
                        current={current}
                        currentActive={currentActive}
                        containerRef={ref => (this.rightSide = ref)}
                        onClick={this.changeState.bind(this)}
                    />
                </div>
            </div>
        );
    };
}

export default AuthenticationPage;