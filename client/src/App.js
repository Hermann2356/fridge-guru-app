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


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid text-center">
                    <div className="row justify-content-center">
                        <Switch>

                            <Route path="/" component={Home}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}


export default App;
