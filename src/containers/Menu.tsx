import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { Col, Row, Button } from '../components';

const MenuContainer = styled.div`
  width: 100%;
  font-size: 20px;
  text-align: center;
`;
const activeStyle = {
  color: "#09D3AC",
};

const defaultStyle = {
  textDecoration: "none",
  color: "black",
};

const menuList = [
  { id: 1, path: '/', name: 'Home'},
  { id: 2, path: '/about', name: 'About'},
  { id: 3, path: '/letter', name: 'Letter'},
  { id: 4, path: '/camera', name: 'Camera'},
]

const Menu = () => {
  return (
    <MenuContainer>
      <Row>
      { menuList.map(item => {
        return (
          <Col key={item.id} xs={6} sm={3} md={3} lg={3}>
            <NavLink to={item.path} activeStyle={activeStyle} exact style={defaultStyle}>
              <Button color={'pink'}>{item.name}</Button>
            </NavLink>
          </Col>
        )
      })}
      </Row>
    </MenuContainer>
  );
};

export default Menu;