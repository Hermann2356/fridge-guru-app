import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';
import './App.css';
import CookingPage from "./pages/CookingPage";
import Home from "./pages/Home";


function Navigation(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
            <Link className="navbar-brand" to="/">Micro Blog</Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/posts/new">
                        Create a Micro Post
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/about-us">
                        About Us
                    </NavLink>
                </li>
            </ul>
            <AuthButton/>
        </nav>
    );
}


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/cooking" component={CookingPage}/>
                        <Route path="/ingredients" component={IndexPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <PrivateRoute path="/posts/new" component={PostFormPage}/>
                        <Route path="/about-us" component={AboutUsPage}/>
                        <Route path="/" component={ Home }/>
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default App;
