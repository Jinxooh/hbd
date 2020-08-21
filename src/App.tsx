import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  About,
  Camera,
  Home,
  Letter,
} from './routes';
import { Col, Row } from './components';
import { Header, Menu } from './containers';
import styled, { ThemeProvider } from 'styled-components';
import { basicTheme } from './styles/theme'

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <ThemeProvider
      theme={basicTheme}
    >
      <BrowserRouter>
        <AppContainer>
          <Header />
          <Row>
            <Col xs={12} sm={9} md={6} lg={6}>
              <Menu />
              <Route path='/' exact={true} component={Home} />
              <Route path='/about' component={About} />
              <Route path='/letter' exact={true} component={Letter} />
            </Col>
          </Row>
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;