import React from 'react';
import styled from 'styled-components';
import title from '../assets/title1.png';

const Header = styled.div`
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`

const Image = styled.img`
  width: 20%;
  min-width: 200px;
`

const HeaderContainer = () => (
  <Header>
    <Image src={title} />
  </Header>
)

export default HeaderContainer;