import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  About,
  Camera,
  Home,
  Letter,
} from './routes';
import { Col, Row, CountDown } from './components';
import { Header, Menu } from './containers';
import styled, { ThemeProvider } from 'styled-components';
import { basicTheme } from './styles/theme';
import { CountContext } from './context';

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
  & {
    background: ${(props) => props.theme.backgroundColor};
  }
  min-height: 100%;
`;

const App = () => {
  // const [count, setCount] = useState(1);

  // useEffect(() => {
  //   setTimeout(() => setCount(count - 1), 1000)
  // }, [count]);

  const day = '2020/09/15 00:00:00'
  const [count, setCount] = useState(new Date(day).getTime() - new Date().getTime());

  useEffect(() => {
    setTimeout(() => setCount(new Date(day).getTime() - new Date().getTime()), 1000)
  }, [count]);

  return (
    <ThemeProvider
      theme={basicTheme}
    >
      <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
        <AppContainer>
        <CountContext.Provider value={count}>
          <CountDown count={count} first={true} />
          { count < 0 && (
            <>
              <Header />
              <Menu />
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/letter' exact={true} component={Letter} />
                    <Route path='/camera' component={Camera} />
                  </Col>
                </Row>
            </>
          )}
        </CountContext.Provider>
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;