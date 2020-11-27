// Import Libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Styles
import "./App.css";

// Import Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";

// Import Component
import Navbar from "./components/Navbar";

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
