import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const MenuContainer = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: space-around;
`;
const activeStyle = {
  color: "#09D3AC",
};

const defaultStyle = {
  textDecoration: "none",
  color: "black",
};

const menuList = [
  { path: '/', name: 'Home'},
  { path: '/about', name: 'About'},
  { path: '/letter', name: 'Letter'},
  { path: '/camera', name: 'Camera'},
]

const Menu = () => {
  return (
    <MenuContainer>
      { menuList.map(item => {
        return (
          <NavLink to={item.path} activeStyle={activeStyle} exact style={defaultStyle}>
            {item.name}
          </NavLink>
        )
      })}
    </MenuContainer>
  );
};

export default Menu;