import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#09D3AC",
};

const defaultStyle = {
  textDecoration: "none",
  color: "black",
};

const Menu = () => {
  return (
    <div className="Menu">
      <NavLink to="/" activeStyle={activeStyle} exact style={defaultStyle}>
        Home
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle} style={defaultStyle}>
        About
      </NavLink>
      <NavLink to="/letter" activeStyle={activeStyle} exact style={defaultStyle}>
        Letter
      </NavLink>
      <NavLink to="/camera" activeStyle={activeStyle} exact style={defaultStyle}>
        Camera
      </NavLink>
    </div>
  );
};

export default Menu;