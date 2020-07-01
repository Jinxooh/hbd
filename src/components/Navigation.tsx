import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#09D3AC",
};

const defaultStyle = {
  textDecoration: "none",
  color: "black",
};

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/" activeStyle={activeStyle} exact style={defaultStyle}>
        Home
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle} style={defaultStyle}>
        About
      </NavLink>
      <NavLink to="/test" activeStyle={activeStyle} style={defaultStyle}>
        Test
      </NavLink>
    </div>
  );
};

export default Navigation;