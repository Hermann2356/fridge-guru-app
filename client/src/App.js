import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import CookingPage from "./pages/CookingPage";
import AuthenticationPage from "./pages/AuthenticationPage"
import Profile from "./pages/Profile";
import RecipePage from "./pages/RecipePage";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/login" component={AuthenticationPage}/>
                        <Route path="/recipe/cooking" component={CookingPage} />
                        <Route path="/recipe" component={RecipePage} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
