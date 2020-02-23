import React from "react";
import logo from "./logo.svg";
import { Button } from "semantic-ui-react";
// import 'semantic-ui-css';
import "./App.css";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Volunteering from "./pages/Volunteering";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Staff from "./pages/Staff";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/volunteering">
          <Volunteering />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/staff">
          <Staff />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
