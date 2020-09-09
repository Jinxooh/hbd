import React from "react";
import { CountDown } from '../components';
import { CountContext } from '../context';

const About = () => {
  return (
    <CountContext.Consumer>
      {count => <CountDown count={count} />}
    </CountContext.Consumer>
  )
};
export default About;