import React from "react";
//import Button from '@material-ui/core/Button';
//import Demo from './Components/Demo';
import Tweet from "./Components/Tweet";
import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Footer from "./Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Tweet name="Hey Abhishek!" message="Welcome You" />
      </div>
    </Router>
  );
}

export default App;
