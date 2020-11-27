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
import Navbar from "./components/Navbar";



// Import Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/login" component={AuthenticationPage}/>
                        <Route path="/recipe/cooking" component={CookingPage} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

// Render Method
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
