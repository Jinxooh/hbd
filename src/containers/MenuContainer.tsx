import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#09D3AC",
};

const defaultStyle = {
  textDecoration: "none",
  color: "black",
};

const MenuContainer = () => {
  return (
    <div className="menuContainer">
      <NavLink to="/" activeStyle={activeStyle} exact style={defaultStyle}>
        Home
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle} style={defaultStyle}>
        About
      </NavLink>
      <NavLink to="/test" activeStyle={activeStyle} style={defaultStyle}>
        Test
      </NavLink>
      <NavLink to="/letter" activeStyle={activeStyle} exact style={defaultStyle}>
        Letter
      </NavLink>
      <NavLink to="/camera" activeStyle={activeStyle} exact style={defaultStyle}>
        Camera
      </NavLink>
      <NavLink to="/song" activeStyle={activeStyle} exact style={defaultStyle}>
        Song
      </NavLink>
      <NavLink to="/gift" activeStyle={activeStyle} exact style={defaultStyle}>
        Gift
      </NavLink>
    </div>
  );
};

export default MenuContainer;