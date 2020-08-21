import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  color: ${(props) => props.theme.fontColor};
`

const HeaderContainer = () => (
  <Header>
    <h1>
      Happy Birth Day
    </h1>
  </Header>
)

export default HeaderContainer;