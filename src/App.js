import React from "react";
import Tweet from "./Components/Tweet";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shopify from "./Components/Shopify";
import Buy from "./Components/Buy";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Shopify} />
      <Route path="/Buy" component={Buy} />
      <Route path="/tweet/facebook" exact component={Tweet} />
      {/* <Tweet name="Hey Abhishek!" message="Welcome You" /> */}
    </Router>
  );
}

export default App;
