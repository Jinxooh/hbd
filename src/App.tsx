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
import { basicTheme } from './styles/theme';

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;

    background-color: ${(props) => props.theme.backgroundColor};
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
            <Col xs={6} sm={6} md={12} lg={12}>
              <Menu />
              <Route path='/' exact={true} component={Home} />
              <Route path='/about' component={About} />
              <Route path='/letter' exact={true} component={Letter} />
              <Route path='/camera' component={Camera} />
            </Col>
          </Row>
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;