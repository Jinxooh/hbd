import React from 'react';
import styled, { keyframes } from 'styled-components';

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const RainbowAnimation = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

const Rainbow = styled.span`
  font-size: 1.5rem;
  font-family: 'ShareTechMono-Regular';
  background-image: linear-gradient(270deg, red, orange, yellow, green, blue, navy, purple);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  background-size: 200% 200%;
  animation: ${RainbowAnimation} 5s ease infinite;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    font-size: 2.3rem;
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    font-size: 3.3rem;
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    font-size: 4rem;
  }
`;

export default Rainbow;
