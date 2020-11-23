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
import Navbar from "./components/Navbar";




class App extends React.Component {
    render() {
        return (
            <Router>

                <div id="app-div">
                    <Navbar />
                    <Switch>
                        <Route path="/recipe/cooking" component={CookingPage} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default App;
