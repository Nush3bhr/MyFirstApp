import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const setStyle = {
    color: "green",
  };
  return (
    <nav className="navi">
      <h3>LOGO</h3>
      <ul className="navLinks">
        <Link style={{ color: "coral" }} to="/aboutt">
          <li>About</li>
        </Link>
        <Link style={setStyle} to="/shopp">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Nav;
