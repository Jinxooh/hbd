import React, { useState, useEffect } from 'react';
import Rainbow from './Rainbow';
import styled from 'styled-components';

type CountDownProps = {
  count: number;
  first?: boolean;
}

const CountDownContainer = styled.div`
  text-align: center;
`;

const CountDown = ({ count, first }: CountDownProps) => {
  let viewCount = count;
  if (count < 0) viewCount = Math.abs(count);

  const digital = (time: any) => time < 10 ? `0${time}` : time;

  return (
    <CountDownContainer>
      <Rainbow>{`${Math.floor(viewCount / (1000 * 60 * 60 * 24))} days ${
        Math.floor(digital(viewCount % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)))}:${
        Math.floor(digital(viewCount % (1000 * 60 * 60)/(1000 * 60)))}:${
        Math.floor(digital(viewCount % (1000 * 60)/(1000)))} Left`}</Rainbow>
    </CountDownContainer>
  )
}

export default CountDown;