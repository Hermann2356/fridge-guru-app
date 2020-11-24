import React from "react";
import "../components_stylesheets/Authentication.scss"
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import auth from "../services/auth"
import { Redirect } from 'react-router-dom';

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
        email: "",
        password: "",
    }

    componentDidMount() {
        this.rightSide.classList.add("right");
    }

    fieldChanged = (name) => {
        return (event) => {
            let { value } = event.target;
            this.setState({ [name]: value });
        }
    }


    login = (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        auth.authenticate(email, password)
            .then((user) => {
                this.setState({ redirectToReferrer: true });
            })
            .catch((err) => {
                this.setState({ failed: true });
            });
    }

    changeState() {
        const { isLoginActive } = this.state;

        if (isLoginActive) {
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("left");
        } else {
            this.rightSide.classList.remove("left");
            this.rightSide.classList.add("right");
        }
        this.setState(prevState => ({ isLoginActive: !prevState.isLoginActive }));
    }

    render() {
        const { isLoginActive } = this.state;
        const current = isLoginActive ? "Register" : "Login";
        const currentActive = isLoginActive ? "login" : "register";
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer, failed } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        let err = "";
        if (failed) {
            err = <div className="alert alert-danger" role="alert">Login Failed</div>;
        }

        return (
            <div className="App">
                <div className="login">
                    <div className="container" ref={ref => (this.container = ref)}>
                        { err }
                        {isLoginActive && (
                            <form onSubmit={this.login}>
                                <Login containerRef={ref => (this.current = ref)}
                                       emailState= {this.state.email}
                                       passwordState= {this.state.password}
                                       emailOnChange= {this.fieldChanged('email')}
                                       passwordOnChange ={this.fieldChanged('password')} />
                            </form>
                        )}
                        {!isLoginActive && (
                            <SignUp containerRef={ref => (this.current = ref)} />
                        )}
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