import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import CookingPage from "./pages/CookingPage";
import AuthenticationPage from "./pages/AuthenticationPage"
import Profile from "./pages/Profile";
import RecipePage from "./pages/RecipePage";
import MulterPage from "./pages/MulterPage";
import PrivateRoute from "./components/PrivateRoute";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                        <Switch>
                            <Route path="/login" component={AuthenticationPage}/>
                            <Route path="/recipe/cooking" component={CookingPage}/>
                            <Route path="/recipe" component={RecipePage}/>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/image" component={MulterPage}/>
                            <PrivateRoute path="/" component={Home}/>
                        </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
